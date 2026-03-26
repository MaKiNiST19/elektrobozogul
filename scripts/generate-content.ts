#!/usr/bin/env tsx
/**
 * LLM İçerik Toplu Üretim Scripti
 * 
 * Kullanım:
 *   npx tsx scripts/generate-content.ts
 *   npx tsx scripts/generate-content.ts --bezirk 1100-favoriten
 *   npx tsx scripts/generate-content.ts --leistung photovoltaik
 *   npx tsx scripts/generate-content.ts --only-missing
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { BEZIRKE } from '../lib/bezirke';
import { LEISTUNGEN } from '../lib/leistungen';
import { buildBezirkPagePrompt, buildBezirkLeistungPrompt } from '../lib/generateContent';

const client = new Anthropic();
const CONTENT_DIR = path.join(process.cwd(), 'content');

// CLI argümanları
const args = process.argv.slice(2);
const onlyMissing = args.includes('--only-missing');
const targetBezirk = args.find(a => a.startsWith('--bezirk='))?.split('=')[1];
const targetLeistung = args.find(a => a.startsWith('--leistung='))?.split('=')[1];

// Klasörleri oluştur
fs.mkdirSync(path.join(CONTENT_DIR, 'bezirke'), { recursive: true });
fs.mkdirSync(path.join(CONTENT_DIR, 'leistungen'), { recursive: true });

// ============================================================
// Ana Bezirk İçeriği Üret
// ============================================================
async function generateBezirkContent(bezirk: typeof BEZIRKE[0]) {
  const outputPath = path.join(CONTENT_DIR, 'bezirke', `${bezirk.slug}.json`);
  
  if (onlyMissing && fs.existsSync(outputPath)) {
    console.log(`⏭️  ${bezirk.name} – bereits vorhanden, übersprungen`);
    return;
  }

  console.log(`🔄 Generiere Inhalt für ${bezirk.name} (${bezirk.plz})...`);

  try {
    const message = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 2000,
      messages: [{
        role: "user",
        content: buildBezirkPagePrompt(bezirk)
      }]
    });

    const rawText = message.content[0].type === 'text' ? message.content[0].text : '';

    // FAQ JSON'u ayıkla
    let faqs: { q: string; a: string }[] = [];
    const faqMatch = rawText.match(/\[\s*\{[\s\S]*?"q"[\s\S]*?\}\s*\]/);
    if (faqMatch) {
      try {
        faqs = JSON.parse(faqMatch[0]);
      } catch {
        console.warn(`⚠️  FAQ parse hatası: ${bezirk.name}`);
      }
    }

    // Ana içeriği FAQ bölümünden temizle
    const mainContent = rawText
      .replace(/\[\s*\{[\s\S]*?"q"[\s\S]*?\}\s*\]/g, '')
      .replace(/## Häufige Fragen[\s\S]*?(\n##|$)/g, '')
      .trim();

    const output = {
      slug: bezirk.slug,
      bezirkName: bezirk.name,
      plz: bezirk.plz,
      generatedAt: new Date().toISOString(),
      model: "claude-opus-4-6",
      mainContent,
      faqs,
    };

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`✅ ${bezirk.name} – gespeichert (${faqs.length} FAQs)`);

  } catch (error) {
    console.error(`❌ Fehler bei ${bezirk.name}:`, error);
  }

  // Rate limit için bekle
  await sleep(1200);
}

// ============================================================
// Bezirk × Leistung Kombinasyon İçeriği Üret
// ============================================================
async function generateComboContent(
  bezirk: typeof BEZIRKE[0],
  leistung: typeof LEISTUNGEN[0]
) {
  const filename = `${bezirk.slug}--${leistung.slug}.json`;
  const outputPath = path.join(CONTENT_DIR, 'leistungen', filename);

  if (onlyMissing && fs.existsSync(outputPath)) {
    return; // Sessizce atla
  }

  console.log(`🔄 ${bezirk.name} × ${leistung.shortTitle}...`);

  try {
    const message = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1500,
      messages: [{
        role: "user",
        content: buildBezirkLeistungPrompt(bezirk, leistung)
      }]
    });

    const content = message.content[0].type === 'text' ? message.content[0].text : '';

    const output = {
      bezirkSlug: bezirk.slug,
      leistungSlug: leistung.slug,
      generatedAt: new Date().toISOString(),
      model: "claude-opus-4-6",
      content,
    };

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`✅ ${bezirk.name} × ${leistung.shortTitle}`);

  } catch (error) {
    console.error(`❌ Fehler: ${bezirk.name} × ${leistung.slug}:`, error);
  }

  await sleep(800);
}

// ============================================================
// Yardımcı Fonksiyonlar
// ============================================================
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function printProgress(current: number, total: number, label: string) {
  const pct = Math.round((current / total) * 100);
  const bar = '█'.repeat(Math.round(pct / 5)) + '░'.repeat(20 - Math.round(pct / 5));
  process.stdout.write(`\r[${bar}] ${pct}% – ${label}`);
}

// ============================================================
// Ana Çalıştırıcı
// ============================================================
async function main() {
  console.log('🚀 Elektro-Bozogul İçerik Üreticisi');
  console.log('=====================================\n');

  const bezirkeToProcess = targetBezirk
    ? BEZIRKE.filter(b => b.slug === targetBezirk)
    : BEZIRKE;

  const leistungenToProcess = targetLeistung
    ? LEISTUNGEN.filter(l => l.slug === targetLeistung)
    : LEISTUNGEN;

  console.log(`📍 Bezirke: ${bezirkeToProcess.length}`);
  console.log(`🔧 Leistungen: ${leistungenToProcess.length}`);
  console.log(`📄 Gesamt: ${bezirkeToProcess.length + bezirkeToProcess.length * leistungenToProcess.length} Seiten\n`);

  // 1. Bezirk ana sayfaları
  console.log('PHASE 1: Bezirk-Hauptseiten\n');
  for (let i = 0; i < bezirkeToProcess.length; i++) {
    printProgress(i, bezirkeToProcess.length, bezirkeToProcess[i].name);
    await generateBezirkContent(bezirkeToProcess[i]);
  }
  console.log('\n');

  // 2. Kombinasyon sayfaları
  console.log('PHASE 2: Bezirk × Leistung Kombinationen\n');
  let comboCount = 0;
  const totalCombos = bezirkeToProcess.length * leistungenToProcess.length;

  for (const bezirk of bezirkeToProcess) {
    for (const leistung of leistungenToProcess) {
      printProgress(comboCount, totalCombos, `${bezirk.name} × ${leistung.shortTitle}`);
      await generateComboContent(bezirk, leistung);
      comboCount++;
    }
  }

  console.log('\n\n✅ Fertig! Alle Inhalte wurden generiert.');
  console.log(`📁 Bezirke: ${path.join(CONTENT_DIR, 'bezirke')}`);
  console.log(`📁 Kombinationen: ${path.join(CONTENT_DIR, 'leistungen')}`);
}

main().catch(console.error);

import fs from 'fs';
import path from 'path';

export interface Post {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
}

export function getAllPosts(type: 'blog' | 'ratgeber'): Post[] {
  const dir = path.join(process.cwd(), 'content', type);
  if (!fs.existsSync(dir)) return [];
  
  const files = fs.readdirSync(dir);
  return files
    .filter(f => f.endsWith('.json'))
    .map(f => {
      const content = fs.readFileSync(path.join(dir, f), 'utf-8');
      return JSON.parse(content);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(type: 'blog' | 'ratgeber', slug: string): Post | null {
  const fp = path.join(process.cwd(), 'content', type, `${slug}.json`);
  if (!fs.existsSync(fp)) return null;
  
  const content = fs.readFileSync(fp, 'utf-8');
  return JSON.parse(content);
}

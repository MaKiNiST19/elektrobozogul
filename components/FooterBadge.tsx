"use client";

import { RatingBadge } from "@/components/foundations/rating-badge";

export default function FooterBadge() {
  return (
    <div style={{ color: 'white' }}>
      <RatingBadge
        title="Befugter Meisterbetrieb"
        subtitle="Zertifiziert & vertrauenswürdig"
        rating={5}
        theme="light"
      />
    </div>
  );
}

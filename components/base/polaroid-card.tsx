import Image from 'next/image';
import React from 'react';

interface PolaroidCardProps {
  imageUrl: string;
  caption: string;
  rotation?: number;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({ imageUrl, caption, rotation = -2 }) => {
  return (
    <div className="polaroid-wrapper">
      <div className="polaroid" style={{ transform: `rotate(${rotation}deg)` } as any}>
        <div className="photo" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
          <Image
            src={imageUrl}
            alt={caption}
            fill
            style={{ objectFit: 'contain' }}
            className="photo-img"
          />
          <div className="dust" />
          <div className="scratches" />
        </div>
        <div className="caption">{caption}</div>
      </div>
    </div>
  );
};

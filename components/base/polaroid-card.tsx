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
        <div className="photo">
          <img src={imageUrl} alt={caption} className="photo-img" />
          <div className="dust" />
          <div className="scratches" />
        </div>
        <div className="caption">{caption}</div>
      </div>
    </div>
  );
};

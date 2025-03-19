import React, { useState } from 'react';

export default function HoverCaptionImage({ imageUrl, alt, caption, maxWidth = 400 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        marginLeft: '20px',
        maxWidth: `${maxWidth}px`,
        // cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={imageUrl}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: '8px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          fontSize: '12px',
          padding: '6px',
          textAlign: 'center',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 2,
          pointerEvents: hovered ? 'auto' : 'none', // <— allow clicks only when visible
        }}
      >
        {caption}
      </div>

    </div>
  );
}

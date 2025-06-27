// src/ModelViewerAR.jsx
import React from 'react';
import '@google/model-viewer';

export default function ModelViewerAR({ src, alt = "3D model" }) {
  return (
    <model-viewer
      src={src}
      ar
      ar-modes="scene-viewer webxr quick-look"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      exposure="1"
      style={{ width: '100%', height: '100vh' }}
    >
      <button slot="ar-button" style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '12px 24px',
        background: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        View in your space
      </button>
    </model-viewer>
  );
}

import React, { useState } from 'react';
import ModelViewerAR from './ModelViewerAR';

function App() {
  const [modelSrc, setModelSrc] = useState(process.env.PUBLIC_URL + "/chair.glb");


  return (
    <div>
      <ModelViewerAR src={modelSrc} alt="Chair in AR" />


      {/* Model Switcher */}
      <div style={{
        position: 'absolute',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#fff',
        borderRadius: '8px',
        padding: '10px',
        display: 'flex',
        gap: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: 100
      }}>
        <button onClick={() => setModelSrc("/chair.glb")}>Chair</button>
      </div>
    </div>
  );
}

export default App;

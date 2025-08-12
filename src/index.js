import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function LightBulb() {
  const [isOn, setIsOn] = useState(false);

  const bulbStyle = {
    fontSize: 100,
    color: isOn ? 'yellow' : 'gray',
    transition: 'color 0.3s ease',
    filter: isOn ? 'drop-shadow(0 0 20px yellow)' : 'none',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>The light is {isOn ? 'ON' : 'OFF'}</h1>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
      <div style={{ marginTop: 20 }}>
        <span role="img" aria-label="light bulb" style={bulbStyle}>
          💡
        </span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LightBulb />);

import React, { useState } from 'react';
import IMAGES from './images.json';
import './App.css';

const white = { background: 'white', height: '100vh' };
const grey = { background: '#f1f1f1', height: '100vh' };
const centerTextStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'center',
};
const imageContainerStyles = {
  flex: 1,
  marginRight: '10px',
  display: 'flex',
  alignItems:'flex-end',
  flexDirection:'column',
  
  };

const textContainerStyles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const smallTextStyles = {
  fontSize: '12px',
};
const navigationStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'LightBlue',
};

function App() {
  const [color, setColor] = useState(white);

  return (
    <div
      style={color}
      onMouseEnter={() => setColor(grey)}
      onMouseLeave={() => setColor(white)}
    >
      <div style={navigationStyles}>
       
        <nav>
          <ul>
            <ul>___</ul>
            <ul>___</ul>
            <ul>___</ul>
          </ul>
        </nav>
      </div>

      <div className="App" style={centerTextStyles}>
        <div style={imageContainerStyles}>
          {IMAGES && IMAGES.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="" />
            </div>
          ))}
          
        </div>
        <div style={textContainerStyles}>
          <h2 style={smallTextStyles}>Scandinavian modernism</h2>
          <div style={smallTextStyles}>
            Size w87xd79xh112cm
            Material: fibreglass, wood
          </div>
          <h2 style={smallTextStyles}>42000$</h2>
        </div>
      </div>
    </div>
  );
}


export default App;



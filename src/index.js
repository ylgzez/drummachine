import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DrumProvider} from './context'

ReactDOM.render(
  <React.StrictMode>
    <DrumProvider>
      <App />
    </DrumProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


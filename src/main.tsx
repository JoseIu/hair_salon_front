import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AirSalonApp } from './AirSalonApp';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AirSalonApp />
    </BrowserRouter>
  </React.StrictMode>
);

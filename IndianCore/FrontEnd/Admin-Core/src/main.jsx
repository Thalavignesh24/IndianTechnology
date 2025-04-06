import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import DeviceInfo from './DeviceInfo.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/indian-core/*" element={<App />} />
        <Route path="/indian-core/device/*" element={<DeviceInfo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

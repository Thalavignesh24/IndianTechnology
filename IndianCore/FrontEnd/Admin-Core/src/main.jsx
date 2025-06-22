import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import DeviceInfo from './DeviceInfo.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/ind-core">
      <Routes>
        <Route path="/app/*" element={<App />} />
        <Route path="/device/*" element={<DeviceInfo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
import "./App.css";
import HeaderContent from "./components/deviceComponent.jsx";
import HomeContent from "./components/homePageComponent.jsx";
import MainContent from "./components/mainPageComponent.jsx";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="mainClass">
      <Routes>
        <Route path="main" element={<MainContent />} />
        <Route path="home" element={<HomeContent />} />
        <Route path="device" element={<HeaderContent/>} />
      </Routes>
    </div>
  );
}

export default App;


import FindMyDeviceInfoContent from "./components/deviceComponent.jsx";
import FindMyIPInfoContent from "./components/findIPComponent.jsx";

import IncognitoDeviceInfoContent from "./components/incognitoModeDetect.jsx";

import BotDeviceInfoContent from "./components/botDetection.jsx";

import EmailLookup from "./components/emailLookup.jsx";

import PhoneLookup from "./components/phoneLookup.jsx";

import { Route, Routes } from "react-router-dom";

function deviceInfo() {

  return (

    <div className="main">

      <div className="header">
      </div>

      <div className="container">

        <div id="ClickEvent">
          <Routes>
            <Route path="info" element={<FindMyDeviceInfoContent />} />
            
            <Route path="find-incognito" element={<IncognitoDeviceInfoContent />} />
            
            <Route path="find-bot" element={<BotDeviceInfoContent />} />
            
            <Route path="find-ip" element={<FindMyIPInfoContent />} />
            
            <Route path="find-email" element={<EmailLookup />} />
            
              <Route path="find-phone" element={<PhoneLookup />} />
            
          </Routes>
        </div>

      </div>

    </div>
  )
}


export default deviceInfo;

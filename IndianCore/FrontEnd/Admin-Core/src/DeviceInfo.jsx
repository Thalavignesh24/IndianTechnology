
import FindMyDeviceInfoContent from "./components/findIPComponent.jsx";
import IncognitoDeviceInfoContent from "./components/incognitoModeDetect.jsx";
import BotDeviceInfoContent from "./components/botDetection.jsx";
import EmailLookup from "./components/emailLookup.jsx";
import { PhoneLookup } from "./components/phoneLookup.jsx";

import { Route, Routes } from "react-router-dom";

function deviceInfo() {

  return (

    <div className="main">

      <div className="header">
      </div>

      <div className="container">

        <div id="ClickEvent">
          <Routes>
            <Route path="find-ip" element={<FindMyDeviceInfoContent />} />
            <Route path="find-incognito" element={<IncognitoDeviceInfoContent />} />
            <Route path="find-bot" element={<BotDeviceInfoContent />} />
            {/* <Route path="findmyip" element={<FindMyDeviceInfoContent />} /> */}
          </Routes>
        </div>

      </div>

    </div>
  )
}


export default deviceInfo;


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
            <Route path="findmyip" element={<FindMyDeviceInfoContent />} />
            {/* <Route path="home" element={<HomeContent />} />
        <Route path="device" element={<HeaderContent/>} /> */}

          </Routes>
        </div>

        <div>
          <IncognitoDeviceInfoContent title="IncognitoMode Detector" />
        </div>

        <div>
          <BotDeviceInfoContent
            title="Bot Detector"
            name="I'm Robot: "
          />
        </div>

        <div>
          <EmailLookup />
        </div>

        <div>
          <PhoneLookup />
        </div>

      </div>


    </div>
  )
}


export default deviceInfo;

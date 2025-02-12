
import FindMyDeviceInfoContent from "./components/findIPComponent.jsx";

import IncognitoDeviceInfoContent from "./components/incognitoModeDetect.jsx";

import BotDeviceInfoContent from "./components/botDetection.jsx";

function deviceInfo(){
  return(
    <div>
      <div id="ClickEvent">
       
         <FindMyDeviceInfoContent name="Find My IPAddress"/>
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
    </div>
  )
}


export default deviceInfo;

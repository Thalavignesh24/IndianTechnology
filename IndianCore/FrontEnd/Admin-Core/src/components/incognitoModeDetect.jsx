import "../designs/Lookup.css";
import { useEffect, useState } from 'react'






function IncognitoInfo() {
  const [incogCheck, getIncog] = useState('');

  const incognit = () => {
    window.detectIncognito().then((result) => {
      if (result?.isPrivate == true) {
        alert(result.private)
        getIncog("Detected");
        alert("Check--->", incogCheck);
        // getIncog('')
      } else {
        getIncog("Not Detected");
        alert("check---->", incogCheck);
        //getIncog('')
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div id="main">
      <div id="container">
        <h1 id="title">Incognito Mode Detector</h1>
        <button id="sub-button" onClick={incognit}>
          Find
        </button>
        <p id="lookupKey">{incogCheck}</p>
      </div>
    </div>
  );
}

export default IncognitoInfo;
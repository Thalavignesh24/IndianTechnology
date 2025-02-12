//import "../designs/deviceInfo.css";


function inCognit() {
  window.detectIncognito().then((result) => {
    if (result?.isPrivate == true) {
      document.getElementById("mode").innerHTML="Detected"
    } else {
      document.getElementById("mode").innerHTML="Not Detected"
    }
  }).catch((error) => {
    console.log(error);
  });
}


function IncognitoInfo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>click here to find</h3>
      
      <button onClick={inCognit}>DetectIncognitoMode</button>
      <br></br>
      <br></br>
      
        <p>Incognito Mode: <span id="mode"></span></p>
    </div>
  );
}

export default IncognitoInfo;
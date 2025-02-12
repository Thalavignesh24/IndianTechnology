

//IP DETECTION
const ipDetect=async()=>{
  alert("IP")
  let openApiIP = await openAPI();
  const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    });
    pc.createDataChannel("");
    pc.createOffer().then(offer => pc.setLocalDescription(offer));
    pc.onicecandidate = async ice => {
      if (ice && ice.candidate) {
        const match = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate);
        
        if (match) {
          const myIP = match[0];
          if(myIP === openApiIP.query){
            document.getElementById("publicIP").innerHTML="Public IP: "+myIP;
          }
          else{
            document.getElementById("privateIP").innerHTML="Private IP: "+myIP;
          }
        }
      }
      if (!ice || !ice.candidate) {
        pc.close();
      }
}
}



let openAPI=async()=>{
  const response = await fetch(`https://pro.ip-api.com/json?key=bCAcN6DNTXuTPnM`);
  const data = await response.json();
  return data;
}


function findMyDeviceInfo(props){
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>click here to find your IPAddress</h3>
      <button onClick={ipDetect}>findMyIP</button>
      <p id="publicIP"></p>
        <p id="privateIP"></p>
    </div>
  );
}

export default findMyDeviceInfo;
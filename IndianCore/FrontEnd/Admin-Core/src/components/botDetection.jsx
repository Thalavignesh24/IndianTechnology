


function botDetectFunc(){
  alert("Bot");
  const userAgent = navigator.userAgent.toLowerCase()
  const botKeywords = ['bot', 'crawl', 'spider', 'scrape', 'slurp'];
  const bot = botKeywords.some(keyword => userAgent.includes(keyword));
  
  if (navigator.webdriver || navigator.userAgent.indexOf('HeadlessChrome') !== -1) {
    document.getElementById("BOT").innerHTML = "Yes you are";
  } else {
    document.getElementById("BOT").innerHTML = "No you are";
    console.log("Bot Detector ", false);
  }
}


function botDetection(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <button onClick={botDetectFunc}>I'm Robot</button>
      <p>{props.name} <span id="BOT"></span></p>
    </div>
  )
}


export default botDetection;





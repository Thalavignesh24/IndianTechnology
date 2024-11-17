import React, { useEffect, useState } from 'react';
import "../designs/main.css";

const MainPage = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const mybutton = document.getElementById("ChangeTheme");

    const changeBackground = () => {
      switch (count) {
        case 1:
          document.body.style.backgroundColor = "red";
          break;
        case 2:
          document.body.style.backgroundColor = "green";
          break;
        case 3:
          document.body.style.backgroundColor = "violet";
          break;
        case 4:
          document.body.style.backgroundColor = "grey";
          break;
        case 5:
          document.body.style.backgroundColor = "pink";
          break;
        case 6:
          document.body.style.backgroundColor = "brown";
          break;
        case 7:
          document.body.style.backgroundColor = "purple";
          break;
        case 8:
          document.body.style.backgroundColor = "blue";
          break;
        case 9:
          document.body.style.backgroundColor = "yellow";
          break;
        case 10:
          document.body.style.backgroundColor = "skyblue";
          setCount(0);  // Reset count after reaching 10
          break;
        default:
          document.body.style.backgroundColor = "white";
      }
      setCount((prevCount) => prevCount + 1); // Increment count
    };

    if (mybutton) {
      mybutton.addEventListener('click', changeBackground);
    }

    return () => {
      if (mybutton) {
        mybutton.removeEventListener('click', changeBackground);
      }
    };
  }, [count]);

  return (
    <div className="main">
      <div className="container">
        <h1 align="center">Welcome To<br /> IndianCore Technology</h1>
        <img
          src="https://res.cloudinary.com/dfgwcxpwt/image/upload/v1729702402/MyLogo_mmh8pz-modified_bnqfhp.png"
          height="700px"
          width="700px"
          id="ChangeTheme"
          alt="Change Theme"
        />
      </div>
      <div className="footer">
        <button id="signin">Sign In</button>
        <button id="signup">Sign Up</button>
      </div>
    </div>
  );
};

export default MainPage;

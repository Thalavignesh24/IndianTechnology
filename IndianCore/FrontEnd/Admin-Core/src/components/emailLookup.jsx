import { useEffect, useState } from 'react'

import axios from 'axios';

import Form from 'react-bootstrap/Form';

import ".././designs/Lookup.css";


const EmailLookup = () => {
  const [inputValue, setInputValue] = useState('');

  const [userData, setUserData] = useState('');

  const [valid, validCheck] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const inputData = async () => {
    if (!inputValue) {
      validCheck("Please Enter Your Email")
    }
    if (inputValue) {
      try {
        const res = await axios.post("http://127.0.0.1:2408/api/admin/indcore/email-data", {
          email: inputValue,
        });
        if (res.data.data.code === 422) {
          validCheck("Please Enter The Valid Email")
        }
        setUserData(res.data)
        setInputValue('');

      } catch (error) {
        console.error("Error fetching email data:", error);
      }
    }
  };

  return (
    <div className="main">

      <div className="header">
        <h1 id="title" align="center">EMAIL VERIFICATION</h1>
      </div>

      <div className="container">
        <img src="https://res.cloudinary.com/dfgwcxpwt/image/upload/v1747489184/upscalemedia-transformed_ek25pa.png" align="center">
        </img><br>
        </br>
        <input
          type="text"
          name="inputEmail"
          id="input-box"
          value={inputValue}
          onChange={handleChange}
          placeholder="ENTER THE EMAIL"
        />
        <p id="validErrMsg" align="center">
          {
            valid
          }
        </p>
        <button name="checkEmail" id="sub-button" onClick={inputData}>Click To Verify</button>



        <div id="data">
          <h4>
            {
              //(userData?.data?.code === 422) ? alert(userData?.data?.["message"]) : ""
            }
          </h4>
        </div>



      </div>
    </div>
  );
};

export default EmailLookup;





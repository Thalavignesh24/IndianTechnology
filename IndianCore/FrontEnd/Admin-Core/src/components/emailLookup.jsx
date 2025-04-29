import {useEffect,useState} from 'react'

import axios from 'axios';

import Form from 'react-bootstrap/Form';

import ".././designs/Lookup.css";


const EmailLookup = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const inputData = async () => {
    alert(inputValue)
    if (inputValue) {
      try {
        const res = await axios.post("http://127.0.0.1:2408/api/admin/indcore/email-data", {
          email: inputValue,
        });
        setUserData(res.data);
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
        <input
          type="text"
          name="inputEmail"
          id="input-box"
          value={inputValue}
          onChange={handleChange}
          placeholder="ENTER THE EMAIL"
        />
        <br /><br />
        <button name="checkEmail" id="sub-button" onClick={inputData}>Verify</button>
        
<div id="data">
  {userData?.data?.emailRequestId && (
    Object.entries(userData.data).map(([key, value]) => (
      <div key={key}>
        {typeof value === 'object' && value !== null ? (
        
          <ul>
              <p id="lookupKey">{`${key}:`}</p>
            {Object.entries(value).map(([subKey, subValue]) => (
             
              <li key={subKey}>
                <span id="value-key">                {`${subKey}`}: </span>
                <span id="value-field">
                  {`${subValue}`}
                </span>
</li>

            ))}
          </ul>
        ) :
        
        (
          <p><span id="keys">{`${key}`} :</span> {`${value}`}</p>
        )}
      </div>
    ))
  )}
</div>



      </div>
    </div>
  );
};

export default EmailLookup;





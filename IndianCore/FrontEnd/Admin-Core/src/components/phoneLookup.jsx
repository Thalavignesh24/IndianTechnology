
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';

import axios from 'axios';

import ".././designs/Lookup.css";

const PhoneLookup = () => {

  const [inputPhone, setInputValue] = useState('');
  const [userData, setUsers] = useState([]);

  const [country, setCountryData] = useState([]);


  const handleChange = (e) => {
    setInputValue(e.target.value);
  };



  const verifyPhone = async () => {
    let code = document.getElementById("code").value;

    await axios.post("http://127.0.0.1:2408/api/admin/indcore/phone-data", {
      "phone": {
        "code": code,
        "number": inputPhone
      }
    }).then((res) => {
      setUsers(res.data);
      setInputValue('');
      document.getElementById("code").value = "";
    })
  }

  return (

    <div className="main">
      <div className="header">
        <h1 id="title" align="center">PHONE NUMBER VERIFICATION</h1>
      </div><br></br><br></br>

      <div className="container">
        <img src="https://res.cloudinary.com/dfgwcxpwt/image/upload/v1747553807/images_ugqucp_e_background_removal_f_png_akcd3w.png" align="center">
        </img>

        <select id="code" className="dropDown">
          <option value="">Select Phone Code</option>
          <option value="91">+91 India</option>
          <option value="44">+44 United Kingdom</option>
        </select>

        <br></br><br></br><br></br>

        <input type="number" name="inputPhone" id="input-box"
          value={inputPhone}
          onChange={handleChange}
          placeholder="ENTER THE PHONE NUMBER" />

        <br></br><br></br>
        <button name="checkPhone" id="sub-button" onClick={verifyPhone}>Click To Verify</button>
      </div>


      <div id="data">
        {userData?.data?.phoneRequestId && (
          Object.entries(userData.data).map(([key, value]) => (
            <div key={key}>
              {typeof value === 'object' && value !== null ? (

                <ul>
                  <p id="lookupKey">{`${key}:`}</p>
                  {Object.entries(value).map(([subKey, subValue]) => (

                    <li key={subKey}>
                      <span id="value-key">{`${subKey}`}: </span>
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
  )
};

export default PhoneLookup;


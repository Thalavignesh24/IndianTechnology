
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';

import axios from 'axios';

import ".././designs/Lookup.css";

const PhoneLookup = () => {

  const [inputPhone, setInputValue] = useState('');
  const [userData, setUsers] = useState('');
  const [country, setCountryData] = useState([]);
  const [valid, validCheck] = useState("");


  const handleChange = (e) => {
    setInputValue(e.target.value);
  };



  const verifyPhone = async () => {
    let code = document.getElementById("code").value;

    if (code === "none") {
      return validCheck("Please Enter Your Phone Code")
    }
    if (!inputPhone) {
      return validCheck("Please Enter Your Phone Number")
    }

    if (inputPhone) {
      try {
        const res = await axios.post("http://127.0.0.1:2408/api/admin/indcore/phone-data", {
          "phone": {
            "code": code,
            "number": inputPhone
          }
        });

        if (res.data.code === 422) {
          validCheck("Please Enter The Valid Phone Number")
        } else {
          setUsers(res.data)
          setInputValue('');
          validCheck("");
          document.getElementById("code").value = "none"
        }

      } catch (error) {
        console.log(error);
      }

    }
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
          <option value="none">Select Phone Code</option>
          <option value="91">+91 India</option>
          <option value="44">+44 United Kingdom</option>
        </select>

        <br></br><br></br><br></br>

        <input type="number" name="inputPhone" id="input-box"
          value={inputPhone}
          onChange={handleChange}
          placeholder="ENTER THE PHONE NUMBER" />

        <br></br>
        <p id="validErrMsg" align="center">
          {
            valid
          }
        </p>
        <br></br>
        <button name="checkPhone" id="sub-button" onClick={verifyPhone}>Click To Verify</button>
        <br></br><br></br>
       <a href="http://localhost:5173/ind-core/device/find-phone" id="reset-button">Click To Refresh</a>
      </div>

      <br></br>
      <br></br>

      <div id="data">
        {
          userData ? <h4>
            <table id="tableContent">
              <th>
                Phone Number Lookup Details
              </th>
              <tr>
                <td>
                  <JSONPretty id="json-pretty" data={userData} theme={JSONPrettyMon}></JSONPretty>
                </td>
              </tr>

            </table>

          </h4> : ""
        }


      </div>

    </div>
  )
};

export default PhoneLookup;


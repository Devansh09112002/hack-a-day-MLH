import React, { useState } from "react";
import styles from "../styles/style.module.css";
import axios from "axios";
// import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
// import { use } from "../../../server/Routes/userRoutes";


function PhoneInput() {

  const [userDetails, setUserDetails] = useState({
	name: "",
	email: "",
  phone: ''
  })

  const navigate = useNavigate();



  const Continue = async (e) => {
  axios.post("http://localhost:8000/api/auth/register", {
      username: userDetails.name,
      email: userDetails.email
  }).then(function(res) {
    console.log(res.data.user);
    // console.log(userDetails);
    localStorage.setItem("stresser-user", JSON.stringify(res.data.user));
    axios
      .post("http://localhost:8000/sendOTP", {
        phone: userDetails.phone,
      })
      .then(function (res) {
        console.log(res.data.otp);
		    localStorage.setItem("twilio-user", JSON.stringify(res.data));
        navigate("/otpverify");
      });
  })
  
    e.preventDefault();
  };

  return (
    <div className={styles}>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.heading}>Stresser</div>
            <div className={styles.input_text}>Name:</div>
            <input type="text"  placeholder="Enter your Name" className={styles.input} value={userDetails.name} onChange={(e) => setUserDetails({...userDetails, name: e.target.value})} />
            <div className={styles.input_text}>Email</div>
            <input type="email" placeholder="Enter your Mail" className={styles.input} value={userDetails.email} onChange={(e) => setUserDetails({...userDetails, email: e.target.value})} />
            <div className={styles.input_text}>Phone number:</div>
              <input
                type="tel"
                value={userDetails.phone}
                onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                placeholder="Enter the Phone No."
                className={styles.input}
              />
            <button onClick={Continue} className={styles.submit}>
              Send OTP
            </button>
          </div>
        </div>
      </div>
  );
}

export default PhoneInput;

import React, { useState } from "react";
import styles from "../styles/style.module.css";
import axios from "axios";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


function PhoneInput() {

  const [userDetails, setUserDetails] = useState({
	name: "Ravi",
	email: "ravi@hbam.in",
	phone: "",
	hash: "",
  })

  const navigate = useNavigate();

  const Continue = (e) => {
    axios
      .post("http://localhost:8000/sendOTP", {
        phone: userDetails.phone,
      })
      .then(function (res) {
        console.log(res.data.otp);
		    localStorage.setItem("chat-app-user", JSON.stringify(res.data));
        navigate("/otpverify");
      });
    e.preventDefault();
  };

  return (
    <div className={styles}>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.heading}>PixCase</div>
            <div className={styles.input_text}>Phone number:</div>
            <div className={styles.input_container}>
              <input
                type="tel"
                value={userDetails.phone}
                onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                placeholder="Enter the Phone No."
                className={styles.input}
              />
            </div>
            <button onClick={Continue} className={styles.submit}>
              Send OTP
            </button>
          </div>
        </div>
      </div>
	// <Section>
	// <Form>
	// <form onSubmit={Continue}>
	// <input type="text" name="" id="" placeholder="Enter your name" />
	// <input type="email" name="" id="" placeholder="Enter your Email" />
	// <div>
	// <span>Are you a Doctor ?</span>
	// <input type="radio" name="" id="" placeholder="Yes" />
	// <input type="radio" name="" id="" placeholder="No" />
	// </div>
	// <input type="text" value={value.phone} onChange={handleChange("phone")} placeholder="Enter your Phone Number"  />
	// <button type="submit" >Send OTP</button>
	// </form>
	// </Form>
	// </Section>
  );
}

export default PhoneInput;

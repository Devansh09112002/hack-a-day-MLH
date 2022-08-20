import React from "react";
import styles from "../styles/style.module.css";
import axios from "axios";
import styled from 'styled-components'

const Section = styled.div`
width: 100vw;
height: 100vh;
background-color: lightblue;
background-image: url('../img/abstract background.webp');

display: flex;
align-items: center;
justify-content: center;

`

const Form = styled.div`

/* width: 30%; */

form{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	/* border: 2px solid blue; */
	border-radius: 10px;
	padding-top: 1rem;

	div{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		/* border: 1px solid red; */
		width: 100%;
		padding-left: 1rem;

		span{
			/* margin: 0.4rem 2rem; */
		/* border: none; */
		font-size: 1rem;
		/* padding: 0.7rem 1rem; */
		/* border-radius: 10px; */
		}
	}

	input{
		margin: 0.4rem 0;
		/* border: none; */
		font-size: 1rem;
		padding: 0.7rem 1rem;
		border-radius: 10px;

		&:focus{
			outline: none;
		}
	}

	button{
		border: none;
		background-color: white;
		color: orange;
		font-weight: 700;
		font-size: 1rem;
		border-radius: 10rem;
		padding: 0.5rem 1rem;
		margin-top: 1rem;
		cursor: pointer;
	}
}
`

function PhoneInput(props) {
  const { value, handleChange, hashHandleChange } = props;

  const Continue = (e) => {
    axios
      .post("http://localhost:8000/sendOTP", {
        phone: `${value.phone}`,
      })
      .then(function (res) {
        console.log(res.data.otp);
        const hash = res.data.hash;
        hashHandleChange(hash);
      });
    e.preventDefault();
    props.nextStep();
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
                value={value.phone}
                onChange={handleChange("phone")}
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

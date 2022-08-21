import React, { useState } from 'react';
import styles from '../styles/style.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OtpVerify() {
	
	axios.defaults.withCredentials = true;

	const [ error, setError ] = useState({
		error: '',
		success: ''
	});
	// const { value, handleChange } = props;

	const [userOtp, setuserOtp] = useState('')

	// const back = (e) => {
	// 	e.preventDefault();
	// 	props.prevStep();
	// };

	const navigate = useNavigate();

	const confirmOtp = async () => {
		const user = await JSON.parse(localStorage.getItem("chat-app-user"));
		console.log(user);
		axios
			.post('http://localhost:8000/verifyOTP', {
				phone: user.phone,
				hash: user.hash,
				otp: userOtp,
				withCredentials: true
			})
			.then(function(res) {
				console.log(res.data);
				navigate('/')
				// window.location.reload();
			})
			.catch(function(error) {
				console.log(error.response.data);
				setError({ ...error, error: error.response.data.msg });
			});
	};

	return (
		<div className={styles}>
			<div className={styles.background}>
				<div className={styles.container}>
					<div className={styles.heading}>PixCase</div>
					<div className={styles.error}>{error.error}</div>
					<div className={styles.success}>{error.success}</div>
					<div className={styles.input_text}>Enter One Time Password:</div>
					<div className={styles.input_container}>
						<input
							type="tel"
							value={userOtp}
							onChange={(e) => setuserOtp(e.target.value)}
							placeholder="Enter the 6 digits OTP"
							className={styles.input}
						/>
					</div>
					<button className={styles.back}>
						Back
					</button>
					<button onClick={confirmOtp} className={styles.submit}>
						Confirm OTP
					</button>
				</div>
			</div>
		</div>
	);
}

export default OtpVerify;

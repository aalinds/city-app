import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import styles from './Otp.module.css';

function Otp() {
	const [otp, setOtp] = useState('');
	const [formValidated, setFormValidated] = useState(false);

	const otpValidation = (otp) => {
		if (otp.length !== 6) return false;

		return true;
	};

	const onOtpChange = (otp) => {
		let otpRegex = /^[0-9]*$/;

		if (!otpRegex.test(otp)) return;

		setOtp(otp);
	};

	useEffect(() => {
		otpValidation(otp) ? setFormValidated(true) : setFormValidated(false);
	}, [otp]);

	return (
		<div className={`d-flex ${styles.parent}`}>
			<form className={`${styles['form-signin']}`}>
				<Link to='/'>
					<img
						className='mb-5'
						src='https://web.mydukaan.io/images/logo.svg'
						alt='company logo'
						width='150'
						height='44'
					/>
				</Link>
				<h1 className='h3 font-weight-normal'>Verify OTP</h1>
				<p className={`mb-4 ${styles['text-1']}`}>
					Enter OTP sent to you at
					<br />
					<span style={{ color: '#1a181e', fontWeight: '500' }}>
						+91-8888888888
					</span>
				</p>

				<div className='mb-4'>
					<label htmlFor='mobile' className='mb-1'>
						OTP
					</label>
					<OtpInput
						value={otp}
						onChange={onOtpChange}
						numInputs={6}
						containerStyle={{ justifyContent: 'space-between' }}
						inputStyle={styles['otp-box']}
					/>
				</div>
				<button
					className={`btn btn-primary btn-lg ${styles['login-btn']}`}
					type='submit'
					disabled={!formValidated}
				>
					Verify
				</button>
			</form>
		</div>
	);
}

export default Otp;

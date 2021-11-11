import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
	const [mobile, setMobile] = useState('');
	const [formValidated, setFormValidated] = useState(false);

	const mobileValidation = (mobile) => {
		if (mobile.length !== 10) return false;

		return true;
	};

	const onMobileChange = (e) => {
		let mobileNumber = e.target.value;
		let mobileRegex = /^[0-9]*$/;

		if (!mobileRegex.test(mobileNumber)) return;

		setMobile(mobileNumber);
	};

	useEffect(() => {
		mobileValidation(mobile) ? setFormValidated(true) : setFormValidated(false);
	}, [mobile]);

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
				<h1 className='h3 mb-5 font-weight-normal'>Log in</h1>
				<label htmlFor='mobile' className='mb-2'>
					Mobile number
				</label>
				<input
					type='text'
					id='mobile'
					className={`form-control mb-4 ${styles['mobile-input']}`}
					placeholder='Enter mobile number'
					required
					autoFocus
					value={mobile}
					onChange={onMobileChange}
				/>
				<button
					className={`btn btn-primary btn-lg ${styles['login-btn']}`}
					type='submit'
					disabled={!formValidated}
				>
					Log in
				</button>
			</form>
		</div>
	);
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
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
				<label htmlFor='mobile' className='sr-only'>
					Mobile number
				</label>
				<input
					type='text'
					id='mobile'
					className={`form-control mb-4`}
					placeholder='Enter mobile number'
					required=''
					autofocus=''
				/>
				<button
					className={`btn btn-primary btn-lg ${styles['login-btn']}`}
					type='submit'
				>
					Log in
				</button>
			</form>
		</div>
	);
};

export default Login;

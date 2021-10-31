import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

class Login extends Component {
	render() {
		return (
			<div className={styles.main}>
				<div className={styles['login-container']}>
					<form className={styles['login-form']}>
						<div className={styles['logo-wrap']}>
							<Link to='/' className={styles['logo']}>
								<img
									src='https://web.mydukaan.io/images/logo.svg'
									alt='company logo'
								/>
							</Link>
						</div>
						<div className={styles['heading']}>Log in</div>
						<div className={styles['form-group']}>
							<label htmlFor='mobile'>Mobile number</label>
							<input
								type='text'
								name='mobile'
								id='mobile'
								className='form-control'
								placeholder='Enter mobile number'
							/>
						</div>
						<button className={`btn btn-primary ${styles['login-btn']}`}>
							Log in
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;

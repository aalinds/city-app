import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import styles from './Otp.module.css';
class Otp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			otp: '',
		};
	}

	handleChange = (val) => {
		this.setState({
			otp: val,
		});
	};

	render() {
		return (
			<div className={styles.main}>
				<div className={styles['login-container']}>
					<form className={styles['login-form']}>
						<div className={styles['logo-wrap']}>
							<Link to='/' className={styles.logo}>
								<img
									src='https://web.mydukaan.io/images/logo.svg'
									alt='company logo'
								/>
							</Link>
						</div>
						<div className={styles.heading}>Verify OTP</div>
						<p className={styles['text-1']}>
							Enter OTP sent to you at
							<br />
							<span style={{ color: '#1a181e', fontWeight: '500' }}>
								+91-8888888888
							</span>
						</p>
						<div className={styles['form-group']}>
							<label htmlFor='mobile'>OTP</label>
							<OtpInput
								value={this.state.otp}
								onChange={this.handleChange}
								numInputs={6}
								containerStyle={{ justifyContent: 'space-between' }}
								inputStyle={styles['otp-box']}
							/>
						</div>
						<button
							className={`btn btn-primary ${styles['verify-btn']}`}
							disabled
						>
							Verify
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Otp;

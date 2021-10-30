import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Otp.css';
import OtpInput from 'react-otp-input';

class Otp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			otp: '',
		};
	}

	render() {
		return (
			<div className='main'>
				<div className='login-container'>
					<form className='login-form'>
						<div className='logo-wrap'>
							<Link to='/' className='logo'>
								<img
									src='https://web.mydukaan.io/images/logo.svg'
									alt='company logo'
								/>
							</Link>
						</div>
						<div className='heading'>Verify OTP</div>
						<p className='text-1'>
							Enter OTP sent to you at
							<br />
							<span style={{ color: '#1a181e', fontWeight: '500' }}>
								+91-8888888888
							</span>
						</p>
						<div className='form-group'>
							<label htmlFor='mobile'>OTP</label>
							<OtpInput
								value={this.state.otp}
								// onChange={this.handleChange}
								numInputs={6}
								containerStyle={{ justifyContent: 'space-between' }}
								inputStyle='otp-box'
							/>
						</div>
						<button className='btn btn-primary' disabled>
							Verify
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Otp;

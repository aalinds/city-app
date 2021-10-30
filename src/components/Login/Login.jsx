import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
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
						<div className='heading'>Log in</div>
						<div className='form-group'>
							<label htmlFor='mobile'>Mobile number</label>
							<input
								type='text'
								name='mobile'
								id='mobile'
								className='form-control'
								placeholder='Enter mobile number'
							/>
						</div>
						<button className='btn btn-primary'>Log in</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;

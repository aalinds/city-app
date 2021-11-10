import Login from './components/Login/Login';
import Otp from './components/Otp/Otp';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='container-liquid'>
			<Switch>
				<Route path='/otp' component={Otp} />
				<Route exact path='/' component={Login} />
			</Switch>
		</div>
	);
}

export default App;

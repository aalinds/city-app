import Login from './components/Login/Login';
import Otp from './components/Otp/Otp';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Switch>
				<Route path='/otp' component={Otp} />
				<Route path='/' component={Login} />
			</Switch>
		</div>
	);
}

export default App;

import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
	const user = null;
	//const user = {name: "Priyanshu Bhattacharjee"};
	
  return (
    <div className="App">	  
	    <Router>
			{
				!user ? (
					<LoginScreen/>
				) : (
				<Switch>
					<Route exact path="/">
						<HomeScreen />
					</Route>
				</Switch>
				)
			}
		</Router>
    </div>
  );
}

export default App;

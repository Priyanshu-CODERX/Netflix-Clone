import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import {auth} from './firebase';
import {useDispatch, useSelector} from 'react-redux'
import {login, logout, selectUser} from './features/counter/userSlice'
import ProfileScreen from './pages/ProfileScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch()
	//const user = {name: "Priyanshu Bhattacharjee"};
	
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if(userAuth) {
				// Logged In
				console.log(userAuth);
				dispatch(login({
					uid: userAuth.uid,
					email: userAuth.email,
				}))
			} else {
				// Logged Out
				dispatch(logout())
			}
		});
		return unsubscribe;
	}, [dispatch])
	
  return (
    <div className="App">	  
	    <Router>
			{
				!user ? (
					<LoginScreen/>
				) : (
				<Switch>
					<Route path="/profile">
						<ProfileScreen />
					</Route>
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

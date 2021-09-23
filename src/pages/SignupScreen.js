import React from 'react';
import './Signup.css'

function SignupScreen() {
  return (
    <div className="signupScreen">
		<form>
			<h1>Sign In</h1>
			<input placeholder="Email" type="email" />
			<input placeholder="Password" type="password" />
			<button type="submit" >Sign In</button>
			
			<h4>
				<span className="signupScreen_grey" >New to Netflix?</span> 
				<span className="signupScreen_link"> Sign Up Now.</span>
			</h4>
			
		</form>
    </div>
  );
}

export default SignupScreen;
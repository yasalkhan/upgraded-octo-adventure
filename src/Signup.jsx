import React from 'react';
import './signup.css'; // Import your CSS file if needed
import logoImage from './images/food__2_-removebg-preview.png'; // Import your image
import App from './App';

const Signup = () => {
  return (
    <div id="signup-section">
      <img src={logoImage} id="logof" className="mainall" alt="Logo" />
      <h1 id="heading">Login</h1><br /><br />
      <form action="">
        <input type="email" className="emailandpassword" placeholder="Email here" className="mainall" required /><br /><br /><br />
        <input type="password" className="emailandpassword" placeholder="Password here" className="mainall" required /><br /><br/><br/>
        <button id="submitbtn" className="mainall" value="sign in" required>Login</button>
      </form>
      <a href="orignal signin with username.html" id="ululuulu">Don't have an account</a>
    </div>
  );
};

export default Signup;

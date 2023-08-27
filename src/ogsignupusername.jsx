import React from 'react';
import './signup.css'; // Import your CSS file if needed
import logoImage from './images/food__2_-removebg-preview.png'; // Import your image
import App from './App'; // Import your image


const ogsignupusername = () => {
  return (
    <div id="signup-section">
      <img src={logoImage} id="logof" className="mainall" alt="Logo" />
      <h1 id="heading">Sign up</h1><br />
      <form action="">
        <input type="Username" className="emailandpassword" placeholder="Username here" className="mainall" required /><br /><br /><br />
        <input type="email" className="emailandpassword" placeholder="Email here" className="mainall" required /><br /><br /><br />
        <input type="password" className="emailandpassword" placeholder="Password here" className="mainall" required /><br />
        <button id="submitbtn" className="mainall" value="sign in" required><h1>Sign up</h1></button>
      </form>
      <a href="signup for car op web.html" id="ululuulu">Already have an account</a>
    </div>
  );
};

export default ogsignupusername;

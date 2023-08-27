import React, { useState } from 'react';
import './App.css';
import foodImage from './images/food__2_-removebg-preview.png'; 
// import natureImage from './images/img_nature_wide.jpg';
// import snowImage from './images/img_snow_wide.jpg';
// import mountainsImage from './images/img_mountains_wide.jpg';
// import spicyImage from './images/shreyak-singh-0j4bisyPo3M-unsplash.jpg';
// import fastFoodImage from './images/daily-slowdown-7-TOCB28rms-unsplash.jpg';
// import sweetImage from './images/leighann-blackwood-HCGCpFxQlrA-unsplash.jpg';
import Signup from './Signup'
import ogsignupusername from './ogsignupusername'
import Food from './Food';

 


const App = () => {
 
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    if (n > 3) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(3);
    } else {
      setSlideIndex(n);
    }
  };

  return (
    <>
      <div id="nav">
        <img id="toumonghumacitybja" src={foodImage} alt="" />
        <div id="orcitybjakybol">
          <input name="searchbar" id="searchbar" type="search" placeholder="  Search The Food" />
          <div htmlFor="searchbar" id="searchsideicon">
            <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </div>
        </div>
        <div className="w3-top w3-hide-large w3-hide-medium">
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <div id="bhaiyaalliswell">
              <ul><a className="yhiumarhaikrlygltisymistake" href="#" style={{ width: '25% !important' }}>Home</a></ul>
              <ul><a className="yhiumarhaikrlygltisymistake" href="#spicy" style={{ width: '25% !important' }}>Spicy</a></ul>
              <ul><a className="yhiumarhaikrlygltisymistake" href="#fastfood" style={{ width: '25% !important' }}>Fast</a></ul>
              <ul><a className="yhiumarhaikrlygltisymistake" href="#sweet" style={{ width: '25% !important' }}>Sweets</a></ul>
            </div>
          </div>
        </div>
        <div id="murgikiajany">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="white" fill="currentColor" id="gamerfleet" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
          <h5 id="andykakiahoga"> <a className="lifemilygiyatawyprfryhoga"  href={ Signup} >Login</a> | <a href={ ogsignupusername} className="lifemilygiyatawyprfryhoga">Sign up</a></h5>
        </div>
      </div>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          {/* <img src={natureImage} style={{ width: '100%' }} alt="Nature" /> */}
          <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          {/* <img src={snowImage} style={{ width: '100%' }} alt="Snow" /> */}
          <div className="text">Caption Two</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          {/* <img src={mountainsImage} style={{ width: '100%' }} alt="Mountains" /> */}
          <div className="text">Caption Three</div>
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>
      <br />
      <div id="wingadiyamlawiousa" style={{ textAlign: 'center', position: 'relative', top: '10px' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>

      <div id="foods-catogary" style={{ position: 'relative', top: '25px'}}>
      
            
                <Food/>
            ))}
        </div>
    

      <div id="footer"></div>
    </>
  );
};
        

export default App;

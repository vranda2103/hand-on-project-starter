import React from 'react';
import logo from '../../components/Navbar/logo.svg';
import Cards from '../DashboardAPI/cards.js';
import img1 from '../DashboardAPI/img1.jpg';
import img2 from '../DashboardAPI/img2.jpg';
import img3 from '../DashboardAPI/img3.jpeg';
import img4 from '../DashboardAPI/img4.gif';
import './DbLogin.scss';

const DbLogin = () => {
    const togglePopup=()=>{
        document.getElementById("popup-1").classList.toggle("active");
    }

  return (
    <div className="DbLoginContainer" id="popup-1">
        <div className="overlay"></div>
        <div className="navbarContainer">
            <div className="logoContainer">
                <img src={logo} alt="cuvetteLogo" />
            </div>
            <div className="DbLoginNavBtn">
                <div className="buttonContainer">
                    <button onClick={togglePopup}>+New API</button>
                </div>
                <div className="buttonContainer DbLoginBtn">
                    <button>My Account</button>
                </div>
                <div className="buttonContainer DbLoginBtn">
                    <button>My APIs</button>
                </div>
            </div>
        </div>
        
        <div className="apiContainer">
            <div className="apiHeading">
                <h2>Your Uploaded APIs</h2>
            </div>

            <div className="cardsContainer">
                <Cards img={img1} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
                <Cards img={img2} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
                <Cards img={img3} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
                <Cards img={img4} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
            </div>
        </div>
        <div className="popupContainer">
            <div className="close-btn" onClick={togglePopup}>&times;</div>
            <form>
                <h2>Add new API</h2>
                <input type="text" name="API name" placeholder="API name" />
                <input type="text" name="API endpoint" placeholder="API endpoint" />
                <textarea name="API description" placeholder="API description" />
                <button type="submit">Add API</button>
            </form>
        </div>
    </div>
  );
};

export default DbLogin;

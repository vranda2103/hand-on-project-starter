import React from 'react';
import logo from '../../components/Navbar/logo.svg';
import DashboardPage from '../DashboardPage/Dashboard.js';
import Api from '../DashboardAPI/api.js';

const MarketplaceLogin = () => {
  return (
      <div className="MarketplaceLogin">
          <div className="navbarContainer">
            <div className="logoContainer">
                <img src={logo} alt="cuvetteLogo" />
            </div>
            <div className="DbLoginNavBtn">
                <div className="buttonContainer">
                    <button>+New API</button>
                </div>
                <div className="buttonContainer DbLoginBtn">
                    <button>My Account</button>
                </div>
                <div className="buttonContainer DbLoginBtn">
                    <button>My APIs</button>
                </div>
            </div>
        </div>
        <DashboardPage />
        <Api />
      </div>
  );
};

export default MarketplaceLogin;

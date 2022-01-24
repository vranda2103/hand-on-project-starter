import React from 'react';
import logo from '../../components/Navbar/logo.svg';
import profile from './layer1.svg';
import add from './strokeAdd.svg';
import circle from './strokeCircle.svg';
import './Logout.scss';

const Logout = () => {
  return (
      <div className="logoutContainer">
          <div className="logoutNavbar">
              <img src={logo} alt="cuvette logo" />
          </div>
          
          <div className="logoutSection">
              <div className="leftSection">
                <div className="intro">
                    <div className="profile">
                        <img className="avatar" src={profile} alt="profile" />
                        <img className="plus" src={add} alt="plus" />
                        <img className="oval" src={circle} alt="circle" />
                    </div>
                    <h1>Welcome to your <br /> dashboard</h1>
                    <p>Your uploaded APIs will be <br /> displayed here once you login to your <br /> account</p>
                </div>
              </div>
              <div className="rightSection">
                  <div className="logoutForm">
                    <form>
                        <h2>Login to your account</h2>
                        <label>
                            Email: <input type="email" name="email" placeholder="Enter your Email"/>
                        </label>
                        <label>
                            Password: <input type="password" name="password" placeholder="Enter your password"/>
                        </label>
                        <button type="submit">Login/Signup</button>
                    </form>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Logout;

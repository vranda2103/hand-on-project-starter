import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Dashboard from './pages/DashboardPage/Dashboard.js';
import Api from './pages/DashboardAPI/api.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login.js';
import Bg from './pages/BgRemover/Bg.js';
import DbLogin from './pages/DashboardLogin/DbLogin.js';
import MarketplaceLogin from './pages/MarketplaceLogin/MarketplaceLogin.js';
import Register from './pages/Register/Register.js';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Dashboard />
    //   <Api />

    //   {/*<Logout />*/}
    // </div>

    <BrowserRouter>
       <Routes>
        <Route path="/Marketplace-LoggedOut" element={<><Navbar /> <Dashboard /> <Api /></>} />   
        <Route path="/Marketplace-Login" element={<MarketplaceLogin />} />   
        
        <Route path="/Bg-Remover" element={<Bg />} />
        <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Dashboard-Login" element={<DbLogin />} />
      </Routes>  
    </BrowserRouter> 
  );
}

export default App;

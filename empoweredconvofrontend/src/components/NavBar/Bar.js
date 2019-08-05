import React from 'react'
import { Link } from 'react-router-dom'
import EmLogo from '../../assets/Medium/EmpoweredConversation-Logo-Md-RGB.png';
import './Bar.css';

export default function Bar(){
  return(
    <div className="nav-bar">
      <div className="logo-div">
        <Link to='/'>
          <img
            className="nav-logo"
            src={EmLogo}
            alt="Empowered Conversations clickable logo; returns to homepage."
          />
        </Link>
        <h6>Empowered Conversation</h6>
      </div>
      <nav className="nav-front">
        <Link className="link-dec" to='/about'>About</Link>
        <Link className="link-dec" to='/contact'>Contact</Link>
        <button className="nav-button">Use The Tool</button>
      </nav>
      
      {/* HAMBURGER MENUS */}
      <nav className="mobile-nav">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          {/* <input type="checkbox" /> */}
          <ul id="menu">
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <button className="nav-button">Use The Tool</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

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
        <Link className="link-dec" to='/learn'>Learn</Link>
        {/* <Link to='/form' className="nav-button">Use The Tool</Link> */}
        <Link to="/form">
                <img
                  className="btnCta"
                  src="assets/cta/Use The Tool Button.png"
                  alt="use tool"
                />
              </Link>
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
            <Link to='/learn'><li>Learn</li></Link>
            <Link to='/form' className="mob-nav-button">Use The Tool</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

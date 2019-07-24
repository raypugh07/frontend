import React from 'react'
//import { Menu } from 'semantic-ui-reacts'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { NavHeader, Nav, LogoDiv, NavBarLogo, linkDec, navButton } from '../../styles/NavStyling';

export default function Bar(){
  return(
    <Router>
      <div>
        <NavHeader>
          <LogoDiv>
            <NavBarLogo/>
            <p>Empowered Conversation</p>
          </LogoDiv>
          <Nav>
            <Link style={linkDec} to='/resources'>Resources</Link>
            <Link style={linkDec} to='/about'>About</Link>
            <Link style={linkDec} to='/contact'>Contact</Link>
            <Link style={linkDec} to='/support'>Support</Link>
            <button style={navButton}>Use The Tool</button>
          </Nav>
        </NavHeader>
      </div>
    </Router>
  );
};
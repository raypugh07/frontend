import React from 'react'
//import { Menu } from 'semantic-ui-reacts'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { NavHeader, Nav, LogoDiv, NavBarLogo, linkDec, navButton,MobNav } from '../../styles/NavStyling';
import BurgerMenu from './Burgermenu';

export default function Bar(){
  return(
    <Router>
      <div>
        <NavHeader>
          <LogoDiv>
            <Link to='/'><NavBarLogo/></Link>
            <p>Empowered Conversation</p>
          </LogoDiv>
          <Nav>
            
            <Link style={linkDec} to='/about'>About</Link>
            <Link style={linkDec} to='/contact'>Contact</Link>
            <Link style={linkDec} to='/support'>Resources</Link>
            <button style={navButton}>Use The Tool</button>
          </Nav>
        
         <div className='mobilenav'>
           
         

          <nav role="navigation">

          
            
  <div id="menuToggle">
  

    <input type="checkbox" />
    
    

    
    <span></span>
    <span></span>
    <span></span>
   
    
  
    <ul id="menu">
    
      <a href="#"><li>About</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="#"><li>Resources</li></a>
      <button style={navButton}>Use The Tool</button>
     
    </ul>
  </div>
</nav>
</div>
         
          </NavHeader>
      </div>
     
    </Router>
  );
};
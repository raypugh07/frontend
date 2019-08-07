import React from 'react'
//import { NavHeader, Nav, LogoDiv, NavBarLogo, linkDec, navButton,MobNav } from '../../styles/NavStyling';
import './About.css'
import Nav from '../NavBar/Bar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'





export default function About(){
    return(
        <div className='about-page'>
                   

             <img
          className="landingBackground"
          src="assets/Background new.png"
          alt="background"
        />
           
            <div className='about-text'>
            <p id='who'>Who We Are</p>
            <p id='A'>A survivor-activated tool that educates and prepares the person they will disclose to before the conversation takes place.</p>
            <p id='our'>Our tool takes the burden off of the survivor for having to educate their loved ones about assault during disclosure because we provide that training ahead of time.</p>
           <Link to='/form'> <button className='aboutbtn' >Use The Tool</button></Link>
           
            </div>
           
           
        </div>
        
    )
}
import React from 'react'
//import { NavHeader, Nav, LogoDiv, NavBarLogo, linkDec, navButton,MobNav } from '../../styles/NavStyling';
import './About.css'



export default function About(){
    return(
        <div className='about-page'>
            <div className='about-text'>
            <p>Who We Are</p>
            <p>A survivor-activated tool that educates and prepares the person they will disclose to before the conversation takes place.</p>
            <p>Our tool takes the burden off of the survivor for having to educate their loved ones about assault during disclosure because we provide that training ahead of time.</p>
            <button className='aboutbtn' >Use The Tool</button>
            </div>

        </div>
    )
}
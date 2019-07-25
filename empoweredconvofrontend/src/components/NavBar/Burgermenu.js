import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import './Bar.css';



 
export default class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }
 
  render () {
    return (
      <Menu>
          <div className='bm-burger-bars'>
        <a id="home" className="menu-item" href="/">About</a>
        <a id="about" className="menu-item" href="/about">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Support</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </div>
      </Menu>
    );
  }
}
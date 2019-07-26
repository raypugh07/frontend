import React from 'react';

import './Landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <img
          className="landingBackground"
          src="assets/Background new.png"
          alt="background"
        />

        <section className="introContainer">
          <div className="intro">
            <img src="assets/intro/Today I am . . ..png" alt="today i am"/>
            <img src="assets/intro/EMPOWERED.png" alt="empowered"/>
            <img src="assets/intro/When words matter mo.png" alt="when words matter"/>
            <img src="assets/intro/A survivor-activated.png" alt="survivor activated tool"/>
          </div>
          <img className="btnExplore" src="assets/intro/explore button.png" alt="explore" />
        </section>
        
        <section className="ctaContainer">

          <img src="assets/cta/Rectangle.png" alt="background rectangle"/>

          <div></div>

        </section>
      </div>
    );
  }
}

export default Landing;

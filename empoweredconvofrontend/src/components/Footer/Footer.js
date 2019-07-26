import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare,faInstagram,faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitterSquare); 
library.add(faInstagram); 
library.add(faFacebook);
library.add(faHeart); 





const icon = <FontAwesomeIcon icon={faTwitterSquare} />
const icon2 = <FontAwesomeIcon icon={faInstagram} />
const icon3 = <FontAwesomeIcon icon={faFacebook} />
const heartIcon = <FontAwesomeIcon icon={faHeart} />




export default function Footer(){
    return(
       <footer>
           <div className='topfooter'>
           <p>Together, We Heal </p>
           <div className='heart'>
           {heartIcon}
           </div>
           </div>
           <p>Connect With Us</p>

           <div className='icons'>

            <div className='icon'><a href='https://twitter.com/empoweredconvo'>{icon}</a></div>
            <div className='icon'><a href='https://www.instagram.com/empoweredconvo/'>{icon2}</a></div>
            <div className='icon'><a href='https://www.facebook.com/empoweredconvo/'>{icon3}</a></div>

            </div>




       </footer>

    )
}
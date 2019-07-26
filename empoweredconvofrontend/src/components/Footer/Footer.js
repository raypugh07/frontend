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

            <div className='icon'>{icon}</div>
            <div className='icon'>{icon2}</div>
            <div className='icon'>{icon3}</div>

            </div>




       </footer>

    )
}
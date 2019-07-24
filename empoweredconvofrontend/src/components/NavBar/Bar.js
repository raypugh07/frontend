import React from 'react'
//import {Menu} from 'semantic-ui-reacts'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Logo from './navlogo.JPG';
import '../NavBar/Bar.css'

export default function Bar(){
    return(
        <Router><div className='nav'>
            <header><div><img alt='logo' src={Logo} className='logo'></img><p>Empowered Conversation</p>
            </div>
                <nav>
                    <Link className='about' to='/about'>About</Link>
                    <Link className='contact' to='/contact'>Contact</Link>
                    <Link className='support' to='/support'>Support</Link>
                    <button>Use The Tool</button>
                </nav>

                    
            </header>
        </div>



        </Router>
    )
}
import '../styles.css';
import React, { useState } from 'react';
import barsIcon from '../images/bars-solid.svg'
import Media from 'react-media';
const Header = () => {
    const [visible, setVisible] = useState('none')
    const menuVisible = {
        display: visible
    }
    const onClick = () => {
        if(visible === 'none') setVisible('flex')
        else setVisible('none')
    }
    return (
        <header>
        <h1>Shortly</h1>  
        <Media query={{ maxWidth: 1000 }}>
            {
                matches =>
                 matches ? (
                    <nav>
                    <button onClick={onClick}><i className="fas fa-bars"></i></button>
                    <div className="dropdown-container" style={menuVisible}>
                               <h4 style={{paddingTop: 30}}>Features</h4>
                               <h4>Pricing</h4>
                               <h4>Resources</h4>
                               <span className="thin-line"></span>
                               <a href="#">Login</a>
                               <a className="get-started-btn" href="#">Sign Up</a>
                            </div>
                            </nav>       
                 ) : (
                     <nav>
                         <ul>
                             <li><a href="#">Features</a></li>
                             <li><a href="#">Pricing</a></li>
                             <li><a href="#">Resources</a></li>
                         </ul>
                         <div className="signUp">
                         <ul>
                             <li><a href="#">Login</a></li>
                             <li><a className="get-started-btn" href="#">Sign Up</a></li>
                         </ul>
                         </div>
                     </nav>
                 )
            }
        </Media>
        
        </header>
    )
}

export default Header;
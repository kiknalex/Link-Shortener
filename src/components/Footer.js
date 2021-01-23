import "../styles.css"
import bgBoost from '../images/bg-boost-mobile.svg'
import bgBoostDesktop from '../images/bg-boost-desktop.svg'
import fbImg from '../images/icon-facebook.svg'
import instaImg from '../images/icon-instagram.svg'
import pinterestImg from '../images/icon-pinterest.svg'
import twitterImg from '../images/icon-twitter.svg'
import Media from 'react-media';
import { useMedia } from 'react-media';
import React, { useState, useEffect } from 'react';
const Footer = () => {
  const [bg, setBg] = useState(bgBoost);
    const isBigScreen = useMedia({ query: "(min-width: 1000px)" });
    const imgStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: '100%'
    }
    useEffect(() => {
        if(isBigScreen) setBg(bgBoostDesktop)
        else setBg(bgBoost)
      }, []);
    return (
        <div className="footer">
        <div className="boost" style={imgStyle}>
    <h2>Boost your links today</h2>
    <a href="#" className="get-started-btn">Get Started</a>
    </div>
      <footer>
        <h1 className="company-name">Shortly</h1>
        
      
        <ul>
        <li><h2>Features</h2></li>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
        </ul>
      <ul>
        <li><h2>Resources</h2></li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
        </ul>
        <ul>
    <li><h2>Company</h2></li>
    <li>About</li>
    <li>Our Team</li>
    <li>Careers</li>            
    <li>Contact</li>
        </ul>
        <ul className="company-logos">
          <li><a href="https://www.facebook.com/"><img src={fbImg} alt="Facebook logo"></img></a></li>
          <li><a href="https://www.instagram.com/"><img src={instaImg} alt="Instagram logo"></img></a></li>
          <li><a href="https://www.pinterest.com/"><img src={pinterestImg} alt="Pinterest logo"></img></a></li>
          <li><a href="https://twitter.com/"><img src={twitterImg} alt="Twitter logo"></img></a></li>
        </ul>
        </footer>
        </div>
    )
}

export default Footer;
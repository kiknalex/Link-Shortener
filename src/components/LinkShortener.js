import "../styles.css"
import Media from 'react-media';
import { useMedia } from 'react-media';
import React, { useState, useEffect } from 'react';
import bgShortenMobile from '../images/bg-boost-mobile.svg'
import bgShortenDesktop from '../images/bg-shorten-desktop.svg'
import linkService from '../services/shortenedLinks'
const LinkShortener = () => {
    const [bg, setBg] = useState(bgShortenMobile);
    const [value, setValue] = useState("");
    const [shortenedLinks, setShortenedLinks] = useState([]);
    const isBigScreen = useMedia({ query: "(min-width: 1000px)" });
    const imgStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: '100%'
    }
    useEffect(() => {
        if(isBigScreen) setBg(bgShortenDesktop)
        else setBg(bgShortenMobile)
      }, []);
    
    const onClick = (e) => {
        e.preventDefault();
        linkService
            .shortenLink(value)
            .then(link => {
                setShortenedLinks(shortenedLinks.concat(link));
            })
            .catch(error => {
                console.log("Error:", error);
            })
            setValue("");
            console.log(shortenedLinks);
    }
    const copyToClipboard = (e) => {
        e.target.value.select();
        document.execCommand("copy");
    }
    
    return (
        <div className="link-shortener-container">
        <div className="shortener-container" style={imgStyle}>
              <input type="url" text="Shorten a link here" value={value} onChange={e => setValue(e.target.value)} placeholder="Shorten link here..."/>
              <button onClick={onClick} className="shorten-btn" type="submit">Shorten It!</button>
        </div>
        <div className="links-container">
        {shortenedLinks.map(link => {
                  return (
                  <div className="link-container" key={link.result.original_link}>
                      <a href={link.result.original_link} style={{color: "hsl(255, 11%, 22%)"}}>{link.result.original_link}</a>
                      <span></span>
                      <div className="short-link-container">
                      <a href={link.result.short_link} className="link">{link.result.short_link}</a>
                      <button value={link.result.short_link} onClick={() =>  navigator.clipboard.writeText(link.result.short_link)}>Copy!</button>
                      </div>
                  </div>
                  )
              })}
              </div>
        </div>
    )
}

export default LinkShortener;
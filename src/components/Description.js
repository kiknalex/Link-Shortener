import "../styles.css"
import brandRecognition from '../images/icon-brand-recognition.svg'
import detailedRecords from '../images/icon-detailed-records.svg'
import fullyCustomizable from '../images/icon-fully-customizable.svg'


const Description = () => {
    
    return (
        <div className="stats">
    <section className="stats-section">        
  <h2>Advanced Statistics</h2>

  <p>Track how your links are performing across the web with our 
advanced statistics dashboard.</p>
</section>

<section>

        <div className="cards-container">
        <div className="line"></div>
<section className="stats-card card1">
        <span className="circle">
            <img src={brandRecognition} alt="Brand Recognition"></img>
            </span>   
        <article className="article-box">
            <h3>Brand Recognition</h3>

        <p>Boost your brand recognition with each click. Generic links don’t 
mean a thing. Branded links help instil confidence in your content.</p>
        </article>
</section>
<section className="stats-card card2">
        <span className="circle">
            <img src={detailedRecords} alt="Detailed Records"></img>
            </span>
    <article className="article-box">
        <h3>Detailed Records</h3>

    <p>Gain insights into who is clicking your links. Knowing when and where 
    people engage with your content helps inform better decisions.</p>
    </article>
</section>
<section className="stats-card card3">
        <span className="circle">
            <img src={fullyCustomizable} alt="Fully Customizable"></img>
            </span>
    <article className="article-box">
        <h3>Fully Customizable</h3>

    <p>Improve brand awareness and content discoverability through customizable 
    links, supercharging audience engagement.</p>
    </article>
</section>
    </div>
</section>
</div>
    )
}

export default Description;
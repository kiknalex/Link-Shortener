import "../styles.css"
import imgWork from '../images/illustration-working.svg'
const WelcomeSection = () => {
    return (

            <div className="welcome-container">
                <div className="img">
            <img src={imgWork} alt="welcome-img" className="img-work"></img>
            </div>
            <div className="welcome-text">
              <h1 style={{fontWeight: 700}}>More than just shorter links</h1>
                <p>Build your brand’s recognition and get 
                    detailed insights on how your links are performing.
                </p>
                <a href="#" className="get-started-btn">Get Started</a>
                </div>
                </div>
    )
}
export default WelcomeSection;
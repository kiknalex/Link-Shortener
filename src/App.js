import './styles.css'
import Header from './components/Header'
import WelcomeSection from './components/WelcomeSection'
import Description from "./components/Description"
import Footer from "./components/Footer"
import LinkShortener from "./components/LinkShortener"
function App() {
  return (
    <div>
    <div className="container">
    <div className="header-welcome">
  <Header /> 
  <WelcomeSection />
  </div>
  <LinkShortener />
  <Description />





  </div>
    <Footer />
    <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Aleksandre Kiknadze</a>.
  </div>
    </div>
  
    
  );
}

export default App;

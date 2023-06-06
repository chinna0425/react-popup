import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-laptopimage"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-mobileimage"
      />
    </div>
  </>
)
export default About

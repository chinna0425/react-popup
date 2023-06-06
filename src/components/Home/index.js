import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="main-home-container">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-laptopimage"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-mobileimage"
      />
    </div>
  </div>
)
export default Home

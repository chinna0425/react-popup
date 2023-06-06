import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-div-container">
      <Link to="/" className="nav-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="header-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="trigger-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-menu" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <div className="cross-container">
              <button
                type="button"
                className="trigger-buttoncross"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="crossicon" />
              </button>
            </div>
            <ul className="unordered-list-container">
              <li onClick={() => close()}>
                <Link to="/" className="list-item">
                  <AiFillHome className="hamburger-homeabout" />
                  <p className="list-para">Home</p>
                </Link>
              </li>
              <li onClick={() => close()}>
                <Link to="/about" className="list-item">
                  <BsInfoCircleFill className="hamburger-homeabout" />
                  <p className="list-para">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)
export default Header

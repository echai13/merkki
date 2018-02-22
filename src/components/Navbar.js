import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Navbar = props => {
  const { children } = props
  return (
    <div id="my-navbar">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src={`/MERKKI_LOGO_cropped.png`} /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="SEARCH" aria-label="search" />
              <button className="btn my-2 my-sm-0" type="submit">↠</button>
            </form>
            <li className="nav-item">
              <a className="nav-link" href="#">Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cart</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="side-navbar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">Our Story</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Shop Now</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Manufacture</a>
          </li>
          <span className="categories">
            <li className="nav-item">
              <a className="nav-link" href="#">Tops</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Socks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Bottoms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Outerwear</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">View All</a>
            </li>
          </span>
        </ul>
      </div>
      { children }
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Navbar)
Navbar.propTypes = {
  children: PropTypes.object,
}

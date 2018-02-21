import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Navbar = props => {
  const { children } = props
  return (
    <div id="my-navbar">
      <div className="navbar navbar-toggleable-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="#"><img src={`/MERKKI_LOGO_cropped.png`} /></a>

          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="SEARCH" aria-label="search" />
                <button className="btn my-2 my-sm-0"
                  style={{ backgroundColor: 'transparent', padding: '0.5em',
                  border: '1px solid' }}
                  type="submit">➡</button>
              </form>
              <li className="nav-item active">
                <a className="nav-link" href="#">Account
                  <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
            </ul>
          </div>
        </div>
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
          <div className="categories">
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
          </div>
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

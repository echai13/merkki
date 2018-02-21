import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <div id="footer">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
          <div>
            <h4>ABOUT MERKKI</h4>
            <ul>
              <li>Our Story</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
          <div>
            <h4>CUSTOMER SERVICE</h4>
            <ul>
              <li>Shipping Information</li>
              <li>Return Policy</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
          <div>
            <h4>CONNECT WITH US</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-end copyright">
        <h5>© 2018 Merkki. All Rights Reserved.</h5>
      </div>
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Footer)

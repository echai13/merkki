import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <div id="footer">
      <div className="d-flex justify-content-center">
        <div className="row align-items-center information">
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <h2>Innovation in Quality</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <span>
                <h4>Follow us on:</h4>
                <h5>Facebook | Instagram</h5>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-2">
          <p>Privacy Policy</p>
        </div>
        <div className="col-md-2">
          <p>Terms & Conditions</p>
        </div>
        <div className="col-md-2">
          <p>Return Policy</p>
        </div>
        <div className="col-md-2">
          <p>Shipping</p>
        </div>
        <div className="col-md-2">
          <p>FAQs</p>
        </div>
        <div className="col-md-2">
          <p>Contact Us</p>
        </div>
      </div>
      <div className="row justify-content-center align-items-end copyright">
        <div className="col-md-12">
          <h5>© 2018 Merkki. All Rights Reserved.</h5>
        </div>
      </div>
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Footer)

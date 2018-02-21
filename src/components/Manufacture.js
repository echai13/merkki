import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

const Manufacture = props => {
  return (
    <div id="manufacture">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 d-flex justify-content-center">
          <div>
            <h4>We Sell.</h4>
            <h4>We Design.</h4>
            <h4>We Manufacture.</h4>
          </div>
        </div>
        <div className="col-md-8">
          <p>Besides designing and selling
            our clothes, we also manufacture. If you
            are interested in a manufacturing partnership,
            please contact us below. We will ensure to work
            out something with you that meets your needs.
          </p>
        </div>
      </div>
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Manufacture)

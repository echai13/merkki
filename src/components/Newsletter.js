import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

const Newsletter = props => {
  return (
    <div id="newsletter" className="d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <h4>Sign up for our newsletter!</h4>
          <p>(Pshh...We promise we won&apos;t spam you with useless emails)</p>
          <div className="email-form"><input type="search" /><button>➡</button></div>
        </div>
      </div>
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Newsletter)

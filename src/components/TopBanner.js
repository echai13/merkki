import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

const TopBanner = props => {
  return (
    <div id="top-banner">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 col-sm-10 col-xs-10 d-flex justify-content-center">
          <img className="left" src={`/athleisure-01a.jpg`} />
        </div>
        <div className="col-md-5 col-sm-10 col-xs-10 d-flex justify-content-center">
          <img src={`/athleisure-01b.jpg`} />
        </div>
      </div>
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(TopBanner)

import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

const OurStory = props => {
  return (
    <div id="our-story" className="d-flex align-items-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 col-sm-10 col-xs-10 d-flex justify-content-center">
          <img src={`/hiking.jpg`} />
        </div>
        <div className="col-md-5 col-sm-10 col-xs-10">
          <h3>Our Story</h3>
          <p>Merkki is a sports and athleisure brand with a focus on practicality and minimalism. The brand creators pursued their idea of staying active and applied this concept within Merkki.</p>

          <p>Imagine you suddenly have the impulse to work out at work but you don’t have the appropriate attire. With our clothes, you don’t have to worry about working out and fret over your clothing.</p>

          <p>Our brand is not about price but more on the practicality. Merkki does not create products that anyone else can produce. We aim to be the best out of the best and offer our products at a competitive price in line with our quality. </p>
        </div>
      </div>
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(OurStory)

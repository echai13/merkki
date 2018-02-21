import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopBanner, OurStory, Newsletter, Manufacture, Footer } from './'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <TopBanner />
        <hr />
        <OurStory />
        <hr />
        <Manufacture />
        <hr className="letter-manu" />
        <Newsletter />
        <hr className="manu-footer"/>
        <Footer />
      </div>
    )
  }
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Home)

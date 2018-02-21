import React, { Component } from 'react'
import { connect } from 'react-redux'

class Products extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    <div>
      {
        this.props.products.map(product => {
          <h3>{ product.title }</h3>
        })
      }
    </div>
  }
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Products)

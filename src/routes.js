import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Login, Signup, Navbar, Home } from './components'
import { me } from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Router history={history}>
        <div className="container-fluid">
          <div className="design-banner" />
        <Navbar>
        {/* <Main> */}
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
            <Route path="/" component={ Home } />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  {/* <Route path="/home" component={ UserHome } /> */}
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={ Login } />
          </Switch>
        </Navbar>
        </div>
        {/* </Main> */}
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

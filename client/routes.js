import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  AllProducts,
  SingleProducts,
  Cart,
  GuestHome
} from './components'
import OrderConfirmation from './components/order-confirmation'
import GuestCart from './components/guestCart'
import {me} from './store'

/**
 * COMPONENT
 */

const NoMatches = () => {
  return (
    <center>
      <h1> Oops! there's nothing here!</h1>
    </center>
  )
}

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={GuestHome} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:id" component={SingleProducts} />
        <Route path="/confirmation" component={OrderConfirmation} />

        <Route exact path="/cart" component={GuestCart} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/cart/:userId" component={Cart} />
            <Route exact path="/home" component={UserHome} />
          </Switch>
        )}

        {/* Displays when things are broken */}
        <Route component={NoMatches} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined as having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.databaseUser.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

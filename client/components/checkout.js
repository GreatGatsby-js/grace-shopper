import React from 'react'
import {connect} from 'react-redux'
import {fetchPlaceOrder} from '../store'
import {Link, NavLink} from 'react-router-dom'
// import axios from 'axios'

const DisconnectedCheckout = props => {
  //if guest user, must make acct first so that we can store in DB.
  if (!props.isLoggedIn) {
    return (
      <div>
        Hey guest! We actually need you to make an account before placing an
        order. Click{' '}
        <Link to="/signup" className="navButtons">
          here
        </Link>{' '}
        to do that first! Then you can navigate back to your cart.
      </div>
    )
  }
  //else
  return (
    <div>
      <div id="checkout-form">
        <hr />
        <label>
          Name:
          <br />
          <input type="text" name="name" />
        </label>

        <label>
          Address line 1:
          <input type="text" name="addres1" />
        </label>
        <label>
          Address line 2:
          <input type="text" name="address1" />
        </label>
        <label>
          City:
          <input type="text" name="city" />
        </label>
        <label>
          State:
          <input type="text" name="state" />
        </label>
        <label>
          Postal code:
          <input type="text" name="postal-code" />
        </label>
        <hr />
      </div>
      <center>
        <NavLink
          to="/confirmation"
          className="checkout-btn"
          onClick={() => {
            props.fetchPlaceOrder(props.orderId)
          }}
        >
          Confirm Order
        </NavLink>
      </center>
    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.databaseUser.id,
    total: state.user.cart.total,
    orderId: state.user.orderId
  }
}

const mapDispatch = dispatch => {
  return {
    fetchPlaceOrder: orderId => {
      dispatch(fetchPlaceOrder(orderId))
    }
  }
}

const Checkout = connect(mapState, mapDispatch)(DisconnectedCheckout)

export default Checkout

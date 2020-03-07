import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPlaceOrder} from '../store'

class DisconnectedCheckout extends Component {
  componentDidMount() {}
  render() {
    console.log('checkout props', this.props)
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.props.fetchPlaceOrder(this.props.orderId)
          }}
        >
          Confirm Order
        </button>
      </div>
    )
  }
}

const mapState = state => {
  console.log('state is', state)
  return {
    isLoggedIn: !!state.user.dataBaseUser.id,
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

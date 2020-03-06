import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchLineItems, fetchCheckout} from '../store'

class DisconnectedCart extends Component {
  componentDidMount() {
    this.props.fetchLineItems(this.props.userId)
  }
  render() {
    if (this.props.cart.length === 0) {
      return (
        <div>
          <div>Whoops! No items in your cart!</div>
          {/* <button type="button">Checkout</button> */}
        </div>
      )
    } else {
      return (
        <div>
          {this.props.cart.map(item => {
            return <div>{item.product.name}</div>
          })}
          <button
            type="button"
            onClick={this.props.fetchCheckout(this.props.orderId)}
          >
            Checkout
          </button>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  let id = null
  if (state.user.databaseUser) {
    id = state.user.databaseUser.id
  }

  return {
    userId: id, //might be null
    orderId: state.user.orderId, //might be null
    cart: [...state.user.cart]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLineItems: userId => {
      dispatch(fetchLineItems(userId))
    },
    fetchCheckout: orderId => {
      dispatch(fetchCheckout(orderId))
    }
  }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchLineItems, fetchPlaceOrder, fetchOrderId} from '../store'

class DisconnectedCart extends Component {
  constructor() {
    super()
    this.state = {
      cart: []
    }
  }
  componentDidMount() {
    this.props.fetchOrderId(this.props.match.params.userId)
  }
  render() {
    console.log('cart component props', this.props)
    if (this.props.cart.length === 0) {
      return (
        <div>
          <div>Whoops! No items in your cart!</div>
        </div>
      )
    } else {
      return (
        <div>
          {this.props.cart.map(item => {
            return (
              <div key={item.id}>
                {item.lineitem.quantity} of the {item.name}
              </div>
            )
          })}
          <button
            type="button"
            onClick={() => this.props.fetchPlaceOrder(this.props.orderId)}
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
    fetchPlaceOrder: orderId => {
      dispatch(fetchPlaceOrder(orderId))
    }
    // fetchOrderId: userId => {
    //   dispatch(fetchOrderId(userId))
    // }
  }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart

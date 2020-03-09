import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchLineItems,
  fetchPlaceOrder,
  fetchIncreaseProductQty,
  fetchDecreaseProductQty
} from '../store'
import {Checkout} from '../components'
import {Link} from 'react-router-dom'

class DisconnectedCart extends Component {
  componentDidMount() {
    this.props.fetchLineItems(this.props.match.params.userId)
  }
  render() {
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
                {item.lineitem.quantity}
                <button
                  type="button"
                  onClick={() => {
                    console.log('hi')
                    this.props.fetchIncreaseProductQty(
                      this.props.userId,
                      this.props.orderId,
                      item.id
                    )
                  }}
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => {
                    this.props.fetchDecreaseProductQty(
                      this.props.userId,
                      this.props.orderId,
                      item.id
                    )
                  }}
                >
                  -
                </button>
                of the {item.name}
              </div>
            )
          })}
          {/* <button
            type="button"
            onClick={() => {
              this.props.fetchPlaceOrder(this.props.orderId)
            }}
          >
            Proceed to Checkout
          </button> */}
          <Link to={`/checkout/${this.props.orderId}`}>
            Proceed to Checkout
          </Link>
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
    fetchIncreaseProductQty: (userId, orderId, productId) => {
      dispatch(fetchIncreaseProductQty(userId, orderId, productId))
    },
    fetchDecreaseProductQty: (userId, orderId, productId) => {
      dispatch(fetchDecreaseProductQty(userId, orderId, productId))
    },
    fetchPlaceOrder: orderId => {
      dispatch(fetchPlaceOrder(orderId))
    }
  }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart

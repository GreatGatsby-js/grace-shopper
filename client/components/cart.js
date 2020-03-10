import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchLineItems,
  fetchPlaceOrder,
  fetchIncreaseProductQty,
  fetchDecreaseProductQty,
  fetchDeleteItem
} from '../store'
import {Checkout} from '../components'
import {Link} from 'react-router-dom'

class DisconnectedCart extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     readyForCheckout: false
  //   }
  //   this.renderCheckout = this.renderCheckout.bind(this);
  // }
  componentDidMount() {
    this.props.fetchLineItems(this.props.match.params.userId)
  }
  // renderCheckout(){
  //   this.setState({
  //     readyForCheckout: true
  //   })
  // }
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
                <button
                  type="button"
                  onClick={() => {
                    this.props.fetchDeleteItem(
                      this.props.userId,
                      this.props.orderId,
                      item.id
                    )
                  }}
                >
                  delete
                </button>
              </div>
            )
          })}
          <div>Your total is ${this.props.total}</div>
          <Checkout total={this.props.total} />
          {/* <button
            type="button"
            onClick={this.renderCheckout}
          >
            Proceed to Checkout
          </button> */}
          {/* <Link to={`/checkout/${this.props.orderId}`}>
            Proceed to Checkout
          </Link> */}
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
    cart: [...state.user.cart.items],
    total: state.user.cart.total
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
    fetchDeleteItem: (userId, orderId, productId) => {
      dispatch(fetchDeleteItem(userId, orderId, productId))
    },
    fetchPlaceOrder: orderId => {
      dispatch(fetchPlaceOrder(orderId))
    }
  }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart

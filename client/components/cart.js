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
        <div id="cart-page">
          <div>
            <center>
              <h1>your cart</h1>
            </center>
            <div id="cart-container">
              <div id="checkout">
                <p className="total">
                  Your total is:{' '}
                  <span className="total-price">${this.props.total}</span>
                </p>
                <Checkout total={this.props.total} />
              </div>

              <div id="cart-item-list">
                {this.props.cart.map(item => {
                  console.log('item is ', item)
                  return (
                    <div key={item.id} id="item-container">
                      <div id="cart-item">
                        <img className="cart-pic" src={item.imageUrl} />
                        <div id="cartinfo-container">
                          <p className="cart-item-name">{item.name}</p>
                          <p className="indiv-price">${item.price} each</p>
                          <div id="cart-qty">
                            <p>qty: {item.lineitem.quantity}</p>
                            <button
                              className="edit-button"
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
                              className="edit-button"
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
                            <button
                              className="edit-button"
                              type="button"
                              onClick={() => {
                                console.log('props for delete', this.props)
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
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
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

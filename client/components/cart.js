import React, {Component} from 'react'
import {connect} from 'react-redux'

class DisconnectedCart extends Component {
  constructor() {
    super()
    console.log('cart props', this.props)
  }
  render() {
    return (
      <div>
        {this.props.lineItems.map(item => {
          return <div>item.product.name</div>
        })}
        <button type="button">Checkout</button>
      </div>
    )
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
    lineItems: [...state.user.lineItems]
  }
}

const mapDispatchToProps = dispatch => {}

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart

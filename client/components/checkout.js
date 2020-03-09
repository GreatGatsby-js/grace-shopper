import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPlaceOrder} from '../store'
import {Link} from 'react-router-dom'
import axios from 'axios'

class DisconnectedCheckout extends Component {
  constructor() {
    super()
    this.state = {
      total: 0
    }
    // this.getCartTotal = this.getCartTotal.bind(this)
  }
  // async componentDidMount() {
  //   console.log('before mounting', this.props)
  //   const theTotal = await this.getCartTotal()
  //   this.setState({total: theTotal})
  // }

  // async getCartTotal() {
  //   console.log('getting cart?')
  //   const {data} = await axios.get(
  //     `/api/cart/order/total/${this.props.match.params.orderId}`
  //   )
  //   return data
  // }

  render() {
    console.log('checkout props', this.props)
    //if guest user, must make acct first so that we can store in DB.
    if (!this.props.isLoggedIn) {
      return (
        <div>
          Hey guest! We actually need you to make an account before placing an
          order. Click{' '}
          <Link to="/login" className="navButtons">
            here
          </Link>{' '}
          to do that first! Then you can navigate back to your cart.
        </div>
      )
    }
    //else
    return (
      <div>
        Your total is {this.state.total}
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
    isLoggedIn: !!state.user.databaseUser.id
    // orderId: state.user.orderId
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

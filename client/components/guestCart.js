import React, {Component} from 'react'
import {
  increaseGuestQty,
  decreaseGuestQty,
  removeFromCart
} from '../store/guestCartFuncs'

class GuestCart extends Component {
  constructor() {
    super()
    this.state = this.getLocalStorage()
    this.getLocalStorage = this.getLocalStorage.bind(this)
    increaseGuestQty.bind(this)
  }

  getLocalStorage() {
    //getting products from local storage and setting them on the state
    const keys = Object.keys(localStorage)
    console.log('keys are ', keys)
    let startState = {}
    keys.forEach(key => {
      //making sure to ignore anything in local storage that isn't one of our products
      try {
        let curr = localStorage.getItem(key)
        let parsed = JSON.parse(curr)
        console.log(curr)

        //if the item we got from local storage has a product property add it to our state
        if (parsed.qty && parsed.product) startState[key] = parsed
      } catch (error) {
        console.error('ignored- not a product for our state')
      }
    })
    return startState
  }

  render() {
    return (
      <div>
        <center>
          <h1>your guest cart</h1>
        </center>
        <div>
          {Object.keys(this.state).map(key => (
            <div key={key}>
              <h1>{this.state[key].product.name}</h1>
              <h3>qty: {this.state[key].qty}</h3>

              <button
                type="button"
                onClick={() => {
                  increaseGuestQty(this.state[key].product)

                  this.setState(
                    {[key]: JSON.parse(localStorage.getItem(key))},
                    () => console.log('increase state', this.state)
                  )
                }}
              >
                increase qty
              </button>

              <button
                type="button"
                onClick={() => {
                  decreaseGuestQty(this.state[key].product)

                  this.setState(
                    {[key]: JSON.parse(localStorage.getItem(key))},
                    () => console.log('decrease state', this.state)
                  )
                }}
              >
                decrease qty
              </button>

              <button
                type="button"
                onClick={() => {
                  try {
                    const prodToDelete = this.state[key].product
                    this.setState({[key]: undefined}, () =>
                      console.log('new state ', this.state)
                    )
                    //remove item from local storage
                    removeFromCart(prodToDelete)
                    //take it of the state
                  } catch (error) {
                    console.error('hey u hit the error')
                  }
                }}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default GuestCart

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
      <div id="cart-page">
        <center>
          <h1>your cart</h1>
        </center>
        <div id="cart-container">
          <div id="checkout">
            <p className="total">
              total price here: <span className="total-price">many dollar</span>{' '}
            </p>
            <button className="checkout-btn" type="button">
              checkout
            </button>
          </div>

          <div id="cart-item-list">
            {Object.keys(this.state).map(key => (
              <div key={key} id="item-container">
                <div id="cart-item">
                  <img
                    className="cart-pic"
                    src={this.state[key].product.imageUrl}
                  />

                  <div id="cartinfo-container">
                    <p className="cart-item-name">
                      {this.state[key].product.name}
                    </p>
                    <p className="indiv-price">
                      ${this.state[key].product.price}
                    </p>

                    <div id="cart-qty">
                      <p>qty: {this.state[key].qty}</p>
                      <button
                        className="edit-button"
                        type="button"
                        onClick={() => {
                          increaseGuestQty(this.state[key].product)

                          this.setState(
                            {[key]: JSON.parse(localStorage.getItem(key))},
                            () => console.log('increase state', this.state)
                          )
                        }}
                      >
                        {/* increase qty */}
                        +
                      </button>

                      <button
                        className="edit-button"
                        type="button"
                        onClick={() => {
                          decreaseGuestQty(this.state[key].product)

                          this.setState(
                            {[key]: JSON.parse(localStorage.getItem(key))},
                            () => console.log('decrease state', this.state)
                          )
                        }}
                      >
                        {/* decrease qty */}
                        -
                      </button>

                      <button
                        className="edit-button"
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default GuestCart

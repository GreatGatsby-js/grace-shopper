import React, {Component} from 'react'
import {
  increaseGuestQty,
  decreaseGuestQty,
  removeFromCart
} from '../store/guestCartFuncs'
import {Checkout} from '../components'

class GuestCart extends Component {
  constructor() {
    super()
    this.state = {}
    this.getLocalStorage = this.getLocalStorage.bind(this)
  }

  componentDidMount() {
    this.setState(this.getLocalStorage())
  }

  getLocalStorage() {
    const keys = Object.keys(localStorage)

    let startState = {}
    keys.forEach(key => {
      try {
        let curr = localStorage.getItem(key)
        let parsed = JSON.parse(curr)

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
            <Checkout total={12} />
          </div>

          <div id="cart-item-list">
            {Object.keys(this.state).map(key => {
              const product = this.state[key].product
              const qty = this.state[key].qty

              return (
                <div key={key} id="item-container">
                  <div id="cart-item">
                    <img className="cart-pic" src={product.imageUrl} />

                    <div id="cartinfo-container">
                      <p className="cart-item-name">{product.name}</p>
                      <p className="indiv-price">${product.price}</p>

                      <div id="cart-qty">
                        <p>qty: {qty}</p>
                        <button
                          className="edit-button"
                          type="button"
                          onClick={() => {
                            increaseGuestQty(product)

                            this.setState(
                              {[key]: JSON.parse(localStorage.getItem(key))},
                              () => console.log('increase state', this.state)
                            )
                          }}
                        >
                          +
                        </button>

                        <button
                          className="edit-button"
                          type="button"
                          onClick={() => {
                            decreaseGuestQty(product)

                            this.setState(
                              {[key]: JSON.parse(localStorage.getItem(key))},
                              () => console.log('decrease state', this.state)
                            )
                          }}
                        >
                          -
                        </button>

                        <button
                          className="edit-button"
                          type="button"
                          onClick={() => {
                            try {
                              console.log('clicked delete')
                              const prodToDelete = product

                              removeFromCart(prodToDelete)

                              const newState = this.getLocalStorage()
                              this.setState(newState)

                              window.location.reload(false)
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
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default GuestCart

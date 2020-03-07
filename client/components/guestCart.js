import React, {Component} from 'react'
import {
  addToGuestCart,
  decreaseQty,
  removeFromCart
} from '../store/guestCartFuncs'

class GuestCart extends Component {
  constructor() {
    super()
    this.state = this.getLocalStorage()
    this.getLocalStorage = this.getLocalStorage.bind(this)
    addToGuestCart.bind(this)
  }

  // componentDidMount(){
  //   this.getLocalStorage()
  // }
  // componentDidUpdate(){
  //   console.log('in update')
  //   this.setState(this.getLocalStorage())
  //   console.log('state', this.state)
  // }

  getLocalStorage() {
    //for testing purposes!!!
    //creating some fake products

    let happyDuck = {
      id: 1,
      name: 'happy duck',
      description:
        'Life is even more fun with this cheerful rubber duck! This duck becomes everyones playmate',
      price: 200,
      imageUrl:
        'https://www.internet-toys.com/producten/large/free_and_easy_badeend_26_x_20_x_22_cm_geel_268798_20190103155226.jpg'
    }
    let bookDuck = {
      id: 2,
      name: 'book worm duck',
      description:
        'We all love reading a good book, so why shouldnt your rubber duck enjoy one too? Please note, this duck does not squeak',
      price: 100,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p_600x.jpeg?v=1457991497'
    }

    let duck1 = {
      qty: 10,
      product: happyDuck
    }
    let duck2 = {
      qty: 20,
      product: bookDuck
    }

    //stringifying them and adding them to local storage
    duck1 = JSON.stringify(duck1)
    duck2 = JSON.stringify(duck2)

    localStorage.setItem('1', duck1)
    localStorage.setItem('2', duck2)
    // end of test data

    //getting products from local storage and setting them on the state
    const keys = Object.keys(localStorage)
    let startState = {}
    keys.forEach(key => {
      let curr = localStorage.getItem(key)
      let parsed = JSON.parse(curr)

      startState[key] = parsed
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
                  addToGuestCart(this.state[key].product)

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
                  decreaseQty(this.state[key].product)

                  this.setState(
                    {[key]: JSON.parse(localStorage.getItem(key))},
                    () => console.log('decrease state', this.state)
                  )
                }}
              >
                decrease qty
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default GuestCart

/*
local storage:
'1': '[1, {blueDuck}]'
'2': '[2, {yellowDuck}]'

Object.keys(localStorage)
  ['1', '2']


*/

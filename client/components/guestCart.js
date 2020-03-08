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

  // componentDidMount(){
  //   console.log('component mounted')
  //   this.getLocalStorage()
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
    console.log('keys are ', keys)
    let startState = {}
    keys.forEach(key => {
      try {
        //making sure to ignore anything in local storage that isn't one of our products
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

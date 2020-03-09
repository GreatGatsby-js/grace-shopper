import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {fetchSingleProduct, fetchAddToCart} from '../store'
import {increaseGuestQty} from '../store/guestCartFuncs'
// import {ProductPreview} from './product-preview'

/**
 * COMPONENT
 */
class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.id)
  }

  render() {
    console.log('single product props')
    return (
      <div id="single-container">
        <h2 className="single-name">{this.props.product.name}</h2>
        <div key={this.props.product.id} id="single">
          <img src={this.props.product.imageUrl} className="singleImg" />
          <div id="single-info">
            <p className="price">${this.props.product.price}</p>
            <p>{this.props.product.description}</p>

            {this.props.isLoggedIn ? (
              <button
                type="button"
                id="add-to-cart"
                onClick={() => {
                  console.log('clicked')
                  this.props.fetchAddToCart(
                    this.props.product,
                    this.props.userId,
                    1
                  )
                }}
              >
                add to cart
              </button>
            ) : (
              <button
                id="add-to-cart"
                type="button"
                onClick={() => increaseGuestQty(this.props.product)}
              >
                add to cart
              </button>
            )}
          </div>
        </div>
        {/* Alternative would be a single product view component, similar to product-preview component but with more details */}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  const id = state.user.databaseUser.id
  return {
    isLoggedIn: !!id,
    userId: id,
    product: state.products.singleProduct //placeholder text. might need to update based on what's in the store
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: id => dispatch(fetchSingleProduct(id)),
    fetchAddToCart: (product, userId) =>
      dispatch(fetchAddToCart(product, userId))
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(connect(mapState, mapDispatch)(SingleProduct))

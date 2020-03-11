import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchSingleProduct, fetchAddToCart} from '../store'
import {increaseGuestQty} from '../store/guestCartFuncs'
import Toast from 'light-toast'

/**
 * COMPONENT
 */
class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.id)
  }

  render() {
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
                  Toast.success('Item Added to Cart', 1000)
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
                onClick={() => {
                  Toast.success('Item Added to Cart', 1000)
                  increaseGuestQty(this.props.product)
                }}
              >
                add to cart
              </button>
            )}
          </div>
        </div>
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
    product: state.products.singleProduct
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

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {fetchSingleProduct, fetchAddToCart} from '../store'
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
      <div>
        Testing. Single Product View
        <div>
          <h2>{this.props.product.name}</h2>
          <div key={this.props.product.id}>
            <p>Name: {this.props.product.name}</p>
            <p>Info: {this.props.product.description}</p>
            <p>Price: {this.props.product.price}</p>
            <img src={this.props.product.imageUrl} />
            {/* conditionally render diff add to cart buttonfor if logged in or not */}
            <button
              type="button"
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
          </div>
          {/* Alternative would be a single product view component, similar to product-preview component but with more details */}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    userId: state.user.databaseUser.id,
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

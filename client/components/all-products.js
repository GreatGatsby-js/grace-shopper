import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import {Login, Signup, UserHome} from './components'
import {fetchProducts} from '../store/products.js'
import ProductPreview from './product-preview'

/**
 * COMPONENT
 */
class AllProducts extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        <div id="all-products">
          {/* <h2>All Products</h2> */}
          <div className="productBox">
            {this.props.products.length
              ? // if there are products, render them
                this.props.products.map(product => (
                  <div key={product.id} id="product-container">
                    <Link to={`/products/${product.id}`}>
                      <ProductPreview product={product} />
                    </Link>
                  </div>
                ))
              : // else if there are none,
                'No Products Yet'}
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
  return {
    products: state.products.allProducts
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(AllProducts))

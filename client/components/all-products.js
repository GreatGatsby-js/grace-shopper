import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import {Login, Signup, UserHome} from './components'
import {fetchProducts} from '../store'
import {Product} from './product'

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
        Testing. All products to show up here
        <div>
          <h2>All Products</h2>
          <ul>
            {this.props.products.map(product => (
              <div key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </ul>
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
    products: state.products.allProducts //placeholder text. might need to update based on what's in the store
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

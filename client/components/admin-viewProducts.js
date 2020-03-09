import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchProducts} from '../store/admin-products.js'

class AdminViewProducts extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const products = this.props.products
    return (
      <div className="adminComponent">
        ALL PRODUCTS
        <div>
          {products.map(prod => (
            <li key={prod.id}>
              <div> Name: {prod.name} </div>
              <div>Description: {prod.description}</div>
              <div>Price: {prod.price}</div>
              {/* <div>Image Source: {prod.imageUrl}</div> */}
            </li>
            // WE SHOULD ADD BUTTONS HERE TO EDIT PRODUCTS
          ))}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  // console.log('state', state)
  return {
    products: state.adminProducts.allProducts
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(AdminViewProducts))

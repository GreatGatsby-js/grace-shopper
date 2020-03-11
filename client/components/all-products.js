import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchProducts} from '../store/products.js'
import ProductPreview from './product-preview'

class AllProducts extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const products = this.props.products.slice() //slicing to make a copy of the props to sort
    products.sort((product1, product2) => product1.id - product2.id) //sorts products by comparing id values

    return (
      <div>
        <div id="all-products">
          <div className="productBox">
            {products.length
              ? // if there are products, render them
                products.map(product => (
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

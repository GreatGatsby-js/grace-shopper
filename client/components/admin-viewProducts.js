import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

import {fetchProducts, removeFromProducts} from '../store/admin-products.js'
import AddProduct from './admin-addProduct'
import EditProduct from './admin-editProduct'

class AdminViewProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editableProducts: {}
    }

    this.handleDeleteProduct = this.handleDeleteProduct.bind(this)
  }

  async componentDidMount() {
    await this.props.fetchProducts()

    const editableProducts = {}
    this.props.products.forEach(product => {
      editableProducts[product.id] = false
    })
    this.setState({
      editableProducts
    })
  }

  makeProductEditable = productId => {
    this.setState(prevState => {
      const newEditableProducts = Object.assign({}, prevState.editableProducts)
      newEditableProducts[productId] = true
      return {editableProducts: newEditableProducts}
    })
  }

  makeProductUneditable = productId => {
    this.setState(prevState => {
      const newEditableProducts = Object.assign({}, prevState.editableProducts)
      newEditableProducts[productId] = false
      return {editableProducts: newEditableProducts}
    })
  }

  async handleDeleteProduct(id) {
    const response = await axios.get(`/api/products/${id}`)
    this.props.delete(response.data)
  }

  render() {
    const products = this.props.products.slice() //slicing to make a copy of the props to sort

    products.sort((product1, product2) => product1.id - product2.id) //sorts products
    // number comparater to keep products from re-rendering at the bottom
    // after editing a product, redux/react re-renders component at bottom of page
    return (
      <div className="adminComponent">
        <h2>ALL PRODUCTS</h2>

        <div>
          <AddProduct />
        </div>

        <div>
          {products.map(prod => (
            <li key={prod.id}>
              {this.state.editableProducts[prod.id] === true ? (
                <EditProduct
                  product={prod}
                  switchToFalse={() => this.makeProductUneditable(prod.id)}
                />
              ) : (
                <div>
                  <div>Name: {prod.name} </div>
                  <div>Description: {prod.description}</div>
                  <div>Price: {prod.price}</div>

                  <button
                    type="button"
                    onClick={() => {
                      this.makeProductEditable(prod.id)
                    }}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      this.handleDeleteProduct(prod.id)
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </div>
      </div>
    )
  }
}

/*  CONTAINER   */
const mapState = state => {
  return {
    products: state.adminProducts.allProducts
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    delete: prod => dispatch(removeFromProducts(prod))
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(AdminViewProducts))

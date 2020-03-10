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

    this.editProduct = this.editProduct.bind(this)
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

  editProduct(id) {
    let editable = this.state.editableProducts
    editable[id] = false
    this.setState({editableProducts: editable})
  }

  async handleDeleteProduct(id) {
    // event.preventDefault()

    const response = await axios.get(`/api/products/${id}`)
    this.props.delete(response.data)
  }

  render() {
    const products = this.props.products

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
                  switchToFalse={() => this.editProduct(prod.id)}
                />
              ) : (
                <div>
                  <div>Name: {prod.name} </div>
                  <div>Description: {prod.description}</div>
                  <div>Price: {prod.price}</div>

                  <button
                    type="button"
                    onClick={() => {
                      // this.handleEditProduct(id)

                      const newEditableProducts = Object.assign(
                        {},
                        this.state.editableProducts
                      )
                      newEditableProducts[prod.id] = true
                      this.setState({editableProducts: newEditableProducts})
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

import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'
import axios from 'axios'

import {removeFromProducts} from '../store/admin-products.js'
// import AddProduct from './admin-addProduct'
// import EditProduct from './admin-editProduct'

class AdminViewProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // editableProducts: {}
    }

    this.deleteProduct = this.deleteProduct.bind(this)
  }

  async deleteProduct(id) {
    event.preventDefault()
    console.log('id in delete product', id)
    const response = await axios.delete(`/api/products/${id}`)
    this.props.delete(response.data)
  }

  render() {
    const products = this.props.products

    return (
      <div>
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
            this.deleteProduct(prod.id)
          }}
        >
          {' '}
          Delete{' '}
        </button>
      </div>
    )
  }
}

/*  CONTAINER   */
// const mapState = state => {
//   return {
//     products: state.adminProducts.allProducts
//   }
// }

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    delete: prod => dispatch(removeFromProducts(prod))
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(AdminViewProducts))

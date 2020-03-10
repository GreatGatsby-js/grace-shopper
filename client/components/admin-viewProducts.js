import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchProducts} from '../store/admin-products.js'
import AddProduct from './admin-addProduct'
import EditProduct from './admin-editProduct'

class AdminViewProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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

  render() {
    const products = this.props.products

    console.log('state', this.state)
    console.log('editableProducts', this.state.editableProducts)
    return (
      <div className="adminComponent">
        <h2>ALL PRODUCTS</h2>

        <div>
          <AddProduct />
        </div>

        <div>
          {products.map(prod => (
            <li key={prod.id}>
              {
                // this.state.editableProducts[prod.id] === true ?
                //   <EditProduct product={prod} />
                //   :
                <div>
                  <div> Name: {prod.name} </div>
                  <div>Description: {prod.description}</div>
                  <div>Price: {prod.price}</div>

                  <button
                    type="button"
                    onClick={() => {
                      console.log('button clicked')
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
                  <button type="submit">Delete</button>
                </div>
              }
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
    fetchProducts: () => dispatch(fetchProducts())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(AdminViewProducts))

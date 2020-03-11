import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editThisProduct} from '../store/admin-products'
import axios from 'axios'

import ProductForm from './admin-productForm'

class EditProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.product.name,
      description: props.product.description,
      price: props.product.price
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const prodId = this.props.product.id

    const response = await axios.put(`/api/products/${prodId}`, this.state)
    this.props.onUpdate(response.data)

    this.props.switchToFalse() //changes this.state.editableProducts[id] back to false so the component changes back to product view instead of editProductForm
  }

  render() {
    return (
      <ProductForm
        formTitle="Edit Product"
        name={this.state.name}
        description={this.state.description}
        price={this.state.price}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onUpdate: prod => dispatch(editThisProduct(prod))
})

export default connect(null, mapDispatchToProps)(EditProduct)

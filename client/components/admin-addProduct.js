import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../store/admin-products'
import axios from 'axios'

import ProductForm from './admin-productForm'

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: ''
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
    const response = await axios.post('/api/products/', this.state)
    this.props.add(response.data)

    this.setState({
      name: '',
      description: '',
      price: ''
    })
  }

  render() {
    return (
      <ProductForm
        formTitle="Add New Product"
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
  add: newProduct => dispatch(addProduct(newProduct))
})

export default connect(null, mapDispatchToProps)(AddProduct)

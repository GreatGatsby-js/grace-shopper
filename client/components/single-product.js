import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {fetchSingleProduct} from '../store'
import {Product} from './product'

/**
 * COMPONENT
 */
class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchSingleProduct()
  }

  render() {
    return (
      <div>
        Testing. Single Product View
        <div>
          <h2>SingleProduct</h2>
          <ul>
            <div key={product.id}>
              <Product product={product} />
            </div>
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
    product: state.SingleProduct //placeholder text. might need to update based on what's in the store
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: () => dispatch(fetchSingleProduct())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(connect(mapState, mapDispatch)(SingleProduct))

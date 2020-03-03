import React from 'react'

const Product = props => {
  const {product} = props

  return (
    <div key={product.id}>
      <p>Name: {product.name}</p>
      <p>Info: {product.description}</p>
      <p>Price: {product.price}</p>
      <img src={product.imageUrl} />
    </div>
  )
}

export default Product

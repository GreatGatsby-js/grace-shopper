import React from 'react'

export const ProductPreview = props => {
  const {product} = props

  return (
    <div>
      {/* <p>Name: {product.name}</p> */}
      <p>Info: {product.description}</p>
      {/* <p>Price: {product.price}</p> */}
      <img src={product.imageUrl} />
    </div>
  )
}

export default ProductPreview

import React from 'react'

export const ProductPreview = props => {
  const {product} = props

  return (
    <div className="product">
      <div id="product-preview">
        <img src={product.imageUrl} className="product-img" />
      </div>
      <p className="preview-name">{product.name}</p>
    </div>
  )
}

export default ProductPreview

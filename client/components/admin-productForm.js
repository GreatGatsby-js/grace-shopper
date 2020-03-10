import React from 'react'

const productForm = props => {
  const {formTitle, name, description, price, onSubmit, onChange, error} = props

  const buttonDisabled = name === ''

  let nameFieldReq
  let descriptionFieldReq
  let priceFieldReq
  let errormessage

  if (error) {
    errormessage = (
      <div className="error">
        There was a problem creating the task -- Network Error
      </div>
    )
  }

  if (name === '') {
    nameFieldReq = <span className="warning">Field is required!</span>
  }

  if (price === '') {
    priceFieldReq = <span className="warning">Field is required!</span>
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>{formTitle}</h3>

      <label htmlFor="productName">Product Name: {nameFieldReq}</label>
      <input type="text" name="name" value={name} onChange={onChange} />

      <label htmlFor="description">Description: {descriptionFieldReq}</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={onChange}
      />

      <label htmlFor="price">Price: {priceFieldReq}</label>
      <input type="number" name="price" value={price} onChange={onChange} />

      <button type="submit" disabled={buttonDisabled}>
        Submit
      </button>
      {errormessage}
    </form>
  )
}

export default productForm

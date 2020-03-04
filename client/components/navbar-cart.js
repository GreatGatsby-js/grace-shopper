import React from 'react'
import {Link} from 'react-router-dom'
// import duckcart from '../../public/duckcart.png'

export const CartButton = props => {
  // const {product} = props

  return (
    <div>
      <Link to="/cart">
        <img
          src="duckcart.png"
          className="cartimage"
          onClick={() => handleClick()}
        />
      </Link>
    </div>
  )
}

export default CartButton

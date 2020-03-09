import axios from 'axios'

/*  ACTION TYPES   */
const ADMIN_GET_ALL_PRODUCTS = 'ADMIN_GET_ALL_PRODUCTS'

/**
 * INITIAL STATE
 */
const initialState = {
  product: {},
  allProducts: []
}

/*  ACTION CREATORS  */

const gotAllProducts = allProducts => {
  return {
    type: ADMIN_GET_ALL_PRODUCTS,
    allProducts
  }
}

/*  THUNK CREATORS   */

export const fetchProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(gotAllProducts(data))
  } catch (err) {
    console.log(err)
  }
}

/*  REDUCER */
export default function(state = initialState, action) {
  switch (action.type) {
    case ADMIN_GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.allProducts]
      }

    default:
      return state
  }
}

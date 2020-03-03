import axios from 'axios'

//Action types
const GOT_PRODUCTS = 'GOT_PRODUCTS'

const initialState = {
  allProducts: null,
  singleProduct: null
}

//Action creators
const gotProducts = allProducts => {
  return {
    type: GOT_PRODUCTS,
    allProducts
  }
}

//Thunks
export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(gotProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

//Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return {
        ...state,
        allProducts: action.allProducts
      }
    default:
      return state
  }
}

import axios from 'axios'

//Action types
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_SINGLE_PRODUCT = 'GOT_SINGLE_PRODUCT'

const initialState = {
  allProducts: [],
  singleProduct: {}
}

//Action creators
const gotProducts = allProducts => {
  return {
    type: GOT_PRODUCTS,
    allProducts
  }
}

const gotSingleProduct = singleProduct => {
  return {
    type: GOT_SINGLE_PRODUCT,
    singleProduct
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

export const fetchSingleProduct = id => async dispatch => {
  try {
    const singleProduct = await axios.get(`/api/products/${id}`)
    dispatch(gotSingleProduct(singleProduct.data))
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
        allProducts: [...action.allProducts]
      }
    case GOT_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: {...action.singleProduct}
      }
    default:
      return state
  }
}

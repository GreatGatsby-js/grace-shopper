import axios from 'axios'

//Action types
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_SINGLE_PRODUCT = 'GOT_SINGLE_PRODUCT'

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

// export const fetchSingleProduct = () => async dispatch => {
//   try {

//   } catch(err){
//     console.error(err);
//   }
// }

//Reducer
export default function(state = {}, action) {
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
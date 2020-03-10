import axios from 'axios'

/*  ACTION TYPES   */
const ADMIN_GET_ALL_PRODUCTS = 'ADMIN_GET_ALL_PRODUCTS'
const ADMIN_ADD_PRODUCT = 'ADMIN_ADD_PRODUCT'

/*  INITIAL STATE  */
const initialState = {
  product: {},
  allProducts: []
}

/*  ACTION CREATORS  */
export const gotProducts = allProducts => {
  return {
    type: ADMIN_GET_ALL_PRODUCTS,
    allProducts
  }
}

export const addProduct = newProd => ({
  type: ADMIN_ADD_PRODUCT,
  newProd
})

/*  THUNK CREATORS   */
export const fetchProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(gotProducts(data))
  } catch (err) {
    console.log(err)
  }
}

export const addToProducts = () => async dispatch => {
  try {
    const {data} = await axios.post('/api/products')
    dispatch(addProduct(data))
  } catch (err) {
    console.log(err)
  }
}

export const editThisProduct = prod => async dispatch => {
  console.log("i'm in edit thunk")
  try {
    await axios.put(`/api/products/${prod.id}`)

    const {data} = await axios.get('/api/products')
    dispatch(gotProducts(data))
  } catch (err) {
    console.log(err)
  }
}

export const removeFromProducts = product => async dispatch => {
  console.log("i'm in delete thunk")
  console.log(product)
  try {
    await axios.delete(`/api/products/${product.id}`)
    const {data} = await axios.get('/api/products')
    dispatch(gotProducts(data))
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

    case ADMIN_ADD_PRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts, action.newProd]
      }

    default:
      return state
  }
}

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
const gotProducts = allProducts => {
  return {
    type: ADMIN_GET_ALL_PRODUCTS,
    allProducts
  }
}

const addProject = newProd => ({
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

export const addToProjects = () => async dispatch => {
  try {
    const {data} = await axios.post('/api/products')
    dispatch(addProject(data))
  } catch (err) {
    console.log(err)
  }
}

export const editThisProject = prod => async dispatch => {
  try {
    await axios.put(`/api/products/${prod.id}`)

    const {data} = await axios.get('/api/products')
    dispatch(gotProducts(data))
  } catch (err) {
    console.log(err)
  }
}

export const removeFromProducts = product => async dispatch => {
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

import axios from 'axios'
import history from '../history'

/*cart notes:
 * Should be updating line items on every call to add to cart, but not updating the cart on this store state. the cart on this store state should be updated when user clicks their cart icon, and the database makes a call to line items and populates the "cart" state.
*/

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GOT_LINE_ITEMS = 'GOT_LINE_ITEMS'
const GOT_LOCAL_STORAGE = 'GOT_LOCAL_STORAGE'
const GOT_ORDER_ID = 'GOT_ORDER_ID'
const ADDED_TO_CART = 'ADDED_TO_CART'

const ADMIN_GET_USERS = 'ADMIN_GET_USERS'

/**
 * INITIAL STATE
 */
const defaultUser = {
  databaseUser: {},
  orderId: null,
  cart: [],
  allDatabaseUsers: []
}

/**
 * ACTION CREATORS
 */
const getUser = (/*cart=[],*/ user) => {
  return {
    type: GET_USER,
    user
    // cart
  }
}
const removeUser = () => ({type: REMOVE_USER})

const gotLineItems = lineItems => {
  return {
    type: GOT_LINE_ITEMS,
    cart: lineItems
  }
}

const gotOrderId = orderId => {
  return {type: GOT_ORDER_ID, orderId}
}

const addedToCart = (product, qty) => {
  return {
    type: ADDED_TO_CART,
    product,
    qty
  }
}

const gotAllUsers = allUsers => {
  return {
    type: ADMIN_GET_USERS,
    allUsers
  }
}

export const fetchOrderId = userId => async dispatch => {
  try {
    console.log('fetching order id')
    const orderId = await axios.get(`/api/cart/order/${userId}`)
    console.log('store orderid', orderId)
    if (orderId) {
      dispatch(gotOrderId(orderId))
    }
  } catch (err) {
    console.error(err)
  }
}

export const fetchLineItems = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/cart/${userId}`)
    dispatch(gotLineItems(data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchAddToCart = (product, userId, qty = 1) => async dispatch => {
  try {
    let {data} = await axios.get(`/api/cart/order/${userId}`)
    data = data[0]

    if (!data) {
      const response = await axios.post(`/api/cart/order`, {
        product,
        userId,
        qty
      })
    } else {
      const response = await axios.put(`/api/cart/order/${data.id}`, {
        product,
        userId,
        qty
      })
    }

    dispatch(addedToCart(product, qty))
  } catch (error) {
    console.error(error)
  }
}
/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || {}))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const fetchUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(gotAllUsers(data))
  } catch (err) {
    console.log(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    // case GOT_LINE_ITEMS: {
    //   return {
    //     ...state,
    //     cart: [...action.lineItems]
    //   }
    // }
    case GOT_ORDER_ID: {
      return {
        ...state,
        orderId: action.orderId
      }
    }
    case GET_USER: {
      return {
        ...state,
        databaseUser: {...action.user}
        // cart: [...action.cart]
      }
    }
    case REMOVE_USER:
      return defaultUser
    case ADDED_TO_CART:
      return {
        ...state,
        cart: [...state.cart, {product: action.product, qty: action.qty}]
      }
    case ADMIN_GET_USERS:
      return {
        ...state,
        allDatabaseUsers: [...action.allUsers]
      }
    default:
      return state
  }
}

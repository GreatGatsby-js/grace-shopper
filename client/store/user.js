import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GOT_LINE_ITEMS = 'GOT_LINE_ITEMS'
const GOT_LOCAL_STORAGE = 'GOT_LOCAL_STORAGE'
const GOT_ORDER_ID = 'GOT_ORDER_ID'
const ADDED_TO_CART = 'ADDED_TO_CART'

/**
 * INITIAL STATE
 */
const defaultUser = {
  databaseUser: {},
  orderId: null,
  cart: []
}

/**
 * ACTION CREATORS
 */
const getUser = user => {
  return {type: GET_USER, user}
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

export const fetchOrderId = userId => async dispatch => {
  try {
    const orderId = await axios.get(`/api/cart/order/${userId}`)
    console.log('store orderid', orderId)
    if (orderId) {
      dispatch(gotOrderId(orderId))
    }
  } catch (err) {
    console.error(err)
  }
}

// export const fetchLineItems = orderId => async dispatch => {
//   try {
//     if (orderId) {
//       const {data} = await axios.get(`/api/cart/${orderId}`)
//       dispatch(gotLineItems(data))
//     } else {
//       dispatch(gotLineItems([]))
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }

export const fetchAddToCart = (product, userId, qty) => async dispatch => {
  try {
    console.log('in fetch add to cart')
    let {data} = await axios.get(`/api/cart/order/${userId}`)
    let lineItems
    console.log('data is', data)

    if (data.length < 1) {
      console.log('in if statement')

      lineItems = await axios.post(`/api/cart/order`)
      // {product, userId, qty}
    }
    // else {
    //   lineItems = await axios.put(`/api/cart/order/${data.orderId}`, {product, userId, qty, data})
    // }

    dispatch(addedToCart(product, qty))
  } catch (error) {
    console.log('thunk error')
    console.error(error)
  }
}
/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
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
      }
    }
    case REMOVE_USER:
      return defaultUser
    case ADDED_TO_CART:
      return {
        ...state,
        cart: [...this.state.cart, {product: action.product, qty: action.qty}]
      }
    default:
      return state
  }
}

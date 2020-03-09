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
// const GOT_ORDER_ID = 'GOT_ORDER_ID'
const ADDED_TO_CART = 'ADDED_TO_CART'
const PLACE_ORDER = 'PLACE_ORDER'
const INCREASED_CART_QTY = 'INCREASED_CART_QTY'

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
const getUser = (user, orderId = null) => {
  return {
    type: GET_USER,
    user,
    orderId
  }
}
const removeUser = () => ({type: REMOVE_USER})

const gotLineItems = lineItems => {
  return {
    type: GOT_LINE_ITEMS,
    lineItems
  }
}

// const gotOrderId = orderId => {
//   return {type: GOT_ORDER_ID, orderId}
// }

const addedToCart = (product, qty) => {
  return {
    type: ADDED_TO_CART,
    product,
    qty
  }
}

const placeOrder = () => {
  return {
    type: PLACE_ORDER
  }
}

export const fetchIncreaseProductQty = (
  userId,
  orderId,
  productId
) => async dispatch => {
  try {
    const {data} = await axios.put(
      `/api/cart/${userId}/${orderId}/${productId}`,
      {action: 'increase'}
    )
    dispatch(gotLineItems(data.products))
  } catch (err) {
    console.error(err)
  }
}

export const fetchDecreaseProductQty = (
  userId,
  orderId,
  productId
) => async dispatch => {
  try {
    const {data} = await axios.put(
      `/api/cart/${userId}/${orderId}/${productId}`,
      {action: 'decrease'}
    )
    dispatch(gotLineItems(data.products))
  } catch (err) {
    console.error(err)
  }
}

export const fetchDeleteItem = (
  userId,
  orderId,
  productId
) => async dispatch => {
  try {
    const {data} = await axios.delete(
      `/api/cart/${userId}/${orderId}/${productId}`
    )
    dispatch(gotLineItems(data.products))
  } catch (err) {
    console.error(err)
  }
}

export const fetchPlaceOrder = orderId => async dispatch => {
  try {
    const {data} = await axios.put(`/api/cart/${orderId}`)
    dispatch(placeOrder())
  } catch (err) {
    console.error(err)
  }
}

// export const fetchOrderId = userId => async dispatch => {
//   try {
//     const order = await axios.get(`/api/cart/order/${userId}`)
//     console.log('store orderid', order)
//     if (order) {
//       dispatch(gotOrderId(order.data.id))
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }

export const fetchLineItems = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/cart/${userId}`)
    if (data) {
      dispatch(gotLineItems(data.products))
    } else {
      dispatch(gotLineItems([]))
    }
  } catch (err) {
    console.error(err)
  }
}

export const fetchAddToCart = (product, userId, qty = 1) => async dispatch => {
  try {
    let {data} = await axios.get(`/api/cart/order/${userId}`)

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

    // dispatch(addedToCart(product, qty))
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
    let orderId = null
    if (res.data) {
      const order = await axios.get(`/api/cart/order/${res.data.id}`)
      orderId = order.id
    }
    dispatch(getUser(res.data || {}, orderId))
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
    case GOT_LINE_ITEMS: {
      return {
        ...state,
        cart: [...action.lineItems]
      }
    }
    case GET_USER: {
      return {
        ...state,
        databaseUser: {...action.user},
        orderId: action.orderId
      }
    }
    case REMOVE_USER:
      return defaultUser
    case ADDED_TO_CART:
      return {
        ...state,
        cart: [...state.cart, {product: action.product, qty: action.qty}]
      }

    case PLACE_ORDER:
      return {
        ...state,
        cart: [],
        orderId: null
      }
    default:
      return state
  }
}

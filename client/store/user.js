import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GOT_LINE_ITEMS = 'GOT_LINE_ITEMS'
const ADDED_TO_CART = 'ADDED_TO_CART'
const PLACE_ORDER = 'PLACE_ORDER'
const GOT_ORDER_ID = 'GOT_ORDER_ID'

/**
 * INITIAL STATE
 */
const defaultUser = {
  databaseUser: {},
  orderId: null,
  cart: {
    items: [],
    total: 0
  }
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

const gotLineItems = (lineItems, total) => {
  return {
    type: GOT_LINE_ITEMS,
    lineItems,
    total
  }
}

const gotOrderId = orderId => {
  return {
    type: GOT_ORDER_ID,
    orderId
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
    dispatch(gotLineItems(data.products, data.totalCost))
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
    dispatch(gotLineItems(data.products, data.totalCost))
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
    dispatch(gotLineItems(data.products, data.totalCost))
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

export const fetchLineItems = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/cart/${userId}`)
    if (data) {
      dispatch(gotLineItems(data.products, data.totalCost))
    } else {
      dispatch(gotLineItems([], 0))
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

      dispatch(gotOrderId(response.data.id))
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
      orderId = order.data.id
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
    let orderId = null
    if (res.data) {
      const order = await axios.get(`/api/cart/order/${res.data.id}`)
      orderId = order.data.id
    }
    dispatch(getUser(res.data, orderId))
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
    case GOT_ORDER_ID: {
      return {
        ...state,
        orderId: action.orderId
      }
    }
    case GOT_LINE_ITEMS: {
      return {
        ...state,
        cart: {
          items: [...action.lineItems],
          total: action.total
        }
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
        cart: {
          items: [
            ...state.cart.items,
            {product: action.product, qty: action.qty}
          ],
          total: action.total
        }
      }

    case PLACE_ORDER:
      return {
        ...state,
        cart: {
          items: [],
          total: 0
        },
        orderId: null
      }
    default:
      return state
  }
}

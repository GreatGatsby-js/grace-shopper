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

/**
 * INITIAL STATE
 */
const defaultUser = {
  databaseUser: {},
  orderId: null,
  lineItems: []
}

/**
 * ACTION CREATORS
 */
const getUser = user => {
  return {type: GET_USER, user}
}
const removeUser = () => ({type: REMOVE_USER})

const gotOrderId = orderId => {
  return {type: GOT_ORDER_ID, orderId}
}

const fetchOrderId = userId => async dispatch => {
  try {
    const orderId = await axios.get(`/api/cart/order/${userId}`)
    if (orderId) {
      dispatch(gotOrderId(orderId))
    }
  } catch (err) {
    console.error(err)
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
    case GET_USER: {
      return action.user
    }
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}

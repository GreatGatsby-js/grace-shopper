import axios from 'axios'
import history from '../history'

/*  ACTION TYPES   */
// const ADMIN_GET_USER = 'GET_USER'
const ADMIN_GET_ALL_USERS = 'ADMIN_GET_USERS'

/**
 * INITIAL STATE
 */
const defaultUser = {
  databaseUser: {},
  // orderId: null,
  // cart: [],
  allDatabaseUsers: []
}

/*  ACTION CREATORS  */

const gotAllUsers = allUsers => {
  return {
    type: ADMIN_GET_ALL_USERS,
    allUsers
  }
}

/*  THUNK CREATORS   */

export const fetchUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(gotAllUsers(data))
  } catch (err) {
    console.log(err)
  }
}

/*  REDUCER */
export default function(state = defaultUser, action) {
  switch (action.type) {
    // case ADMIN_GET_USER: {
    //   return {
    //     ...state,
    //     databaseUser: {...action.user},
    //     orderId: action.orderId
    //   }
    // }

    case ADMIN_GET_ALL_USERS:
      return {
        ...state,
        allDatabaseUsers: [...action.allUsers]
      }

    default:
      return state
  }
}

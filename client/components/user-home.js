import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, isAdmin} = props

  if (isAdmin === true) {
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <p> You are an admin.</p>
      </div>
    )
  }

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <p> You are not an admin.</p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log('state', state)
  return {
    email: state.user.databaseUser.email,
    isAdmin: state.user.databaseUser.isAdmin
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

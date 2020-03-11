import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchUsers} from '../store/admin-users.js'

class AdminViewUsers extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const users = this.props.users

    return (
      <div className="adminComponent">
        <h2>ALL USERS</h2>
        <div>
          {users.map(user => (
            <li key={user.id}>
              <div>ID: {user.id}</div>
              <div>Email: {user.email}</div>
            </li>
          ))}
        </div>
      </div>
    )
  }
}

/*  CONTAINER  */
const mapState = state => {
  return {
    users: state.adminUsers.allDatabaseUsers
  }
}

const mapDispatch = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(AdminViewUsers))

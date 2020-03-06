import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchUsers} from '../store/user.js'

class AdminViewUsers extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const users = this.props.users
    return (
      <div className="adminComponent">
        ALL USERS
        <div>
          {users.map(user => <div key={user.id}>Name: {user.name}</div>)}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log('state', state)
  return {
    users: state.user.allDatabaseUsers
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

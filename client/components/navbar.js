import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = props => {
  return (
    <div id="navPanel">
      <div id="header">
        <h1 className="title">Lux Ducks</h1>
      </div>
      <nav className="nav">
        {props.isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/userhome">Home</Link>
            <Link to="/products">Products</Link>
            <a href="#" onClick={props.handleClick}>
              Logout
            </a>
            <Link to={`/cart/${props.userId}`} className="navButtons">
              Cart
            </Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/" className="navButtons">
              Home
            </Link>
            <Link to="/products">Products</Link>
            <Link to="/login" className="navButtons">
              Login
            </Link>
            <Link to="/signup" className="navButtons">
              Sign Up
            </Link>
            {/* <Link to="/cart" className="navButtons" onClick={fetchLocalStorage}>
            Cart
          </Link> */}
          </div>
        )}
      </nav>
      <div className="space" />
      {/* <hr /> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  const id = state.user.databaseUser.id
  return {
    isLoggedIn: !!id,
    userId: id, //might be null
    orderId: state.user.orderId
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}
export default connect(mapState, mapDispatch)(Navbar)

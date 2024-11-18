import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { signOut } from "../../features/featuresUser/actions/Action"

import logo from '../../assets/argentBankLogo.png'

import '../Header/Header.css'

/**
 * Component React which display the navigation's buttons on the header
 * @component
 */

const Header = () => {

  /**
       * Get the user profile from the state
       */
  const user = useSelector(state => state.user)

  /**
     * The hook that comes with React Router that will allow us to use the browser’s History API.
     */
  const nav = useNavigate()

  /**
   * The dispatch is used to send actions to the reducer
   */
  const dispatch = useDispatch()

  /**
   * The callback handleSubmit for the sign out button is triggered when the form is submitted.
   * @param {*} event 
   */
  function handleLogout(event) {
    event.preventDefault()
    localStorage.removeItem('token')        // Token will be removed when sign out button is clicked
    dispatch(signOut())
    nav('/')
  }

  return (
    <header className="header">
      <h1 className="srOnly">Argent Bank</h1>
      <ul className="headerNav">
        <Link className="logo" to="/" >
          <img src={logo} alt="Argent Bank logo" />
        </Link>
        <div className="signButton">

          {!user.firstName &&
            <NavLink className={'navButton'} to='/SignIn'>
              Sign In
            </NavLink>
          }
          {user.firstName &&
            <>
              <FaUserCircle className="userIcon" />
              <p>{user.firstName}</p>
              <NavLink className={'navButton'} onClick={handleLogout} to='#'>
                Sign Out
              </NavLink>
            </>
          }
        </div>
      </ul>
    </header>
  )
}

export default Header
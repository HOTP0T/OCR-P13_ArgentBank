import { PROFILE_SUCCESFUL, PROFILE_FAILED, SIGN_OUT } from '../actions/Action'

const userState = {
  firstName: '',
  lastName: '',
  email: ''
}

/**
 * The functions in Redux that take the curent state and an action and return a new state.
 * To update the user's profile
 * @param { Object } state User's infos 
 * @param { Object } action Update user's profile
 */
const userReducer = (state = userState, action) => {
  switch (action.type) {
    case PROFILE_SUCCESFUL:
      return { ...state, ...action.payload }
    case PROFILE_FAILED:
      return state
    case SIGN_OUT:
      return { ...userState }
    default:
      return state
  }
}

export default userReducer
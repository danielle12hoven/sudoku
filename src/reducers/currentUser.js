import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'
import { AUTH_ERROR } from '../actions/loading'

const USER_STORAGE_KEY = 'recipes-api-user-b9'
const currentUser = JSON.parse(
  window.localStorage.getItem(USER_STORAGE_KEY) || 'null')

export default (state = currentUser, { type, payload } = {}) => {
  switch (type) {
    case USER_SIGNED_IN :
      window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(payload))
      return Object.assign({}, payload)

    case AUTH_ERROR :
    case USER_SIGNED_OUT :
      window.localStorage.removeItem(USER_STORAGE_KEY)
      return null

    default :
      return state
  }
}

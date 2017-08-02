import API from '../../api'
import { history } from '../../store'
import { loading, loadError, loadSuccess, authError } from '../loading'

const api = new API()

export default (difficulty) => {
  return (dispatch) => {
    dispatch(loading(true))

    const backend = api.service('games')

    api.app.authenticate()
      .then(() => {
        backend.create({ difficulty })
          .then((result) => {
            dispatch(loadSuccess())
            dispatch(loading(false))
            history.push(`/game/${result._id}`)
          })
          .catch((error) => {
            dispatch(loading(false))
            dispatch(loadError(error))
          })
      })
      .catch(() => {
        dispatch(loading(false))
        dispatch(authError())
      })
  }
}
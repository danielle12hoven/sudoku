// src/actions/games/create.js

import API from '../../api'
import { loading, loadError, loadSuccess, authError } from '../loading'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    const backend = api.service('games')

    api.app.authenticate()
      .then(() => {
        backend.create({})
        // api.service('sudoku_api')
          // .create(newGame)
          .then((result) => {
            dispatch(loadSuccess())
            dispatch(loading(false))
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

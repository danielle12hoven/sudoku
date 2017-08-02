// src/actions/games/fetch.js


// FROM HERE WE NEED TO FETCH AN EXISTING GAME
// SO FIRST WE NEED TO PUSH A GAME TO THE DB

import API from '../../api'
import { loading, loadError, loadSuccess } from '../loading'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    const backend = api.service('games')
    backend.find()
    .then((result) => {
      dispatch(loadSuccess())

      dispatch({
        type: FETCHED_GAMES,
        payload: result.data
      })

      dispatch(loading(false))
    })
    .catch((error) => {
      dispatch(loading(false))
      dispatch(loadError(error))
    })
  }
}

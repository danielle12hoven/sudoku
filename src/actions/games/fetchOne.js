// src/actions/games/fetch.js


// FROM HERE WE NEED TO FETCH AN EXISTING GAME
// SO FIRST WE NEED TO PUSH A GAME TO THE DB

import API from '../../api'
import { loading, loadError, loadSuccess } from '../loading'

export const FETCHED_ONE_GAME = 'FETCHED_ONE_GAME'

const api = new API()

export default (gameId) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.doAuthenticate()
      .then(() => {
        api.service('games').get(gameId)
          .then((result) => {
            dispatch(loadSuccess())

            dispatch({
              type: FETCHED_ONE_GAME,
              payload: result
            })

            dispatch(loading(false))
          })
          .catch((error) => {
            dispatch(loading(false))
            dispatch(loadError(error))
          })
      })
  }
}

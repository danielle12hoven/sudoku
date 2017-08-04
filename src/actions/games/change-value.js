// Here we need to place the data for a player to make a move (input a value into the cell)


// We will probably use { $push { <field1> : <value1>, ...} }

// https://docs.mongodb.com/manual/reference/operator/update/push/// src/actions/games/create.js

import API from '../../api'
import { loading, loadError, loadSuccess, authError } from '../loading'

export const CHANGE_VALUE = 'CHANGE_VALUE'

const api = new API()

export default (gameId, cellIndex) => {
  return (dispatch) => {
    dispatch(loading(true))

    const backend = api.service('sudoku')

    api.app.authenticate()
      .then(() => {
        backend.patch(gameId, { cell: cellIndex })
          .then((result) => {
            dispatch({
            	type: CHANGE_VALUE,
            	payload: cellIndex
            })
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

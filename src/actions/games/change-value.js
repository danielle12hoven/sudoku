// Here we need to place the data for a player to make a move (input a value into the cell)


// We will probably use { $push { <field1> : <value1>, ...} }

// https://docs.mongodb.com/manual/reference/operator/update/push/// src/actions/games/create.js

import API from '../../api'
import { loading, loadError, loadSuccess, authError } from '../loading'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    const backend = api.service('games')

    api.app.authenticate()
      .then(() => {
        backend.patch(_id, cell.newValue)
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

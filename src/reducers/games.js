// src/reducers/games.js

import { FETCHED_GAMES } from '../actions/games/fetch'
import { FETCHED_ONE_GAME } from '../actions/games/fetchOne'
import {
  GAME_CREATED,
  GAME_UPDATED,
  GAME_REMOVED
} from '../actions/games/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_GAMES :
      return [ ...payload ]

    case FETCHED_ONE_GAME :
      const gameInStoreAlready = state.filter((g) => g._id === payload._id).length > 0
      // we got a game that was not in the store yet, so add it
      if (!gameInStoreAlready) return state.concat({ ...payload })
      // we got a game that is also in the store, so replace it with the payload
      return state.map((game) => (game._id === payload._id  ? { ...payload } : game))

    case GAME_CREATED :
      const newGame = { ...payload }
      return [newGame].concat(state)

    case GAME_UPDATED :
      return state.map((game) => {
        if (game._id === payload._id) {
          return { ...payload }
        }
        return game
      })

    case GAME_REMOVED :
        return state.filter((game) => (game._id !== payload._id))

    default :
      return state

  }
}

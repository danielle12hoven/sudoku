import React, { PureComponent } from 'react'
import Store from '../store'
// import { history } from '../store'
import { connect } from 'react-redux'
import subscribeToGamesService from '../actions/games/subscribe'
import fetchGame from '../actions/games/fetchOne'
import './GameBoard.css'


export class Game extends PureComponent {
  componentWillMount() {
    const { gameId, fetchGame, subscribeToGamesService } = this.props
    fetchGame(gameId)
    subscribeToGamesService()
  }

 render() {
   const { game } = this.props

   if (!game) return null

   return (
     <div className="board">
       {game.cells.map((row, rowIndex) => {
         return (
           <div key={rowIndex} className="row">
             {row.map((cell, cellIndex) => {
               if (cell instanceof Object) return null
               return(
                 <div className="cell" key={cellIndex}>{ cell }</div>
               )
             })}
           </div>
         )
       })}
     </div>
   )
 }
}


const mapStateToProps = ({ currentUser, games }, { gameId }) => ({
  signedIn: !!currentUser && !!currentUser._id,
  game: games.filter((g) => (g._id === gameId))[0]
})


export default connect(mapStateToProps, {
  fetchGame,
  subscribeToGamesService
})(Game)

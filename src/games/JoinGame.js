
import React, { PureComponent } from 'react'
import Title from '../components/Title'
import GameBoard from './GameBoard'
import './joinGame.css'



export class JoinGame extends PureComponent {

  render() {
    const { gameId } = this.props.params

    return(
      <div className="join-wrapper">
      	<header className="join-game">
  	  	  <Title content="You joined a game!" />
  	  	  <GameBoard gameId={gameId} />
    		</header>
      </div>
    )
  }
}


export default JoinGame


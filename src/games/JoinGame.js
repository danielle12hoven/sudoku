
import React, { PureComponent } from 'react'
import Title from '../components/Title'
import GameBoard from './GameBoard'



export class JoinGame extends PureComponent {

  render() {
    const { gameId } = this.props.params

    return(
      <div className="games-wrapper">
      	<header className="games">

  	  	  <Title content="Join game" />


  	  	  <GameBoard gameId={gameId} />
    		</header>
      </div>
    )
  }
}


export default JoinGame


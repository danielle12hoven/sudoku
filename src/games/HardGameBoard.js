// src/games/GameContainer.js

import React, { PureComponent } from 'react'
import Title from '../components/Title'
import GameBoard from './GameBoard'


export class HardGameBoard extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header className="games">
  	  	  <Title content="Hard Game Active" />
  	  	  <GameBoard />
    		</header>
      </div>
    )}
}

export default HardGameBoard
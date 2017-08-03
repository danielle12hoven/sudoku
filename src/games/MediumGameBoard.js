// src/games/GameContainer.js

import React, { PureComponent } from 'react'
import Title from '../components/Title'
import GameBoard from './GameBoard'


export class MediumGameBoard extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header>
  	  	  <Title content="Medium Game Active" />
  	  	  <GameBoard />
    		</header>
      </div>
    )}
}

export default MediumGameBoard
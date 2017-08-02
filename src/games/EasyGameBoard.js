// src/games/GameContainer.js

import React, { PureComponent } from 'react'
import Title from '../components/Title'
import GameBoard from './GameBoard'


export class EasyGameBoard extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header className="games">
  	  	  <Title content="Easy Game Active" />
  	  	  <GameBoard />
    		</header>
      </div>
    )}
}

export default EasyGameBoard
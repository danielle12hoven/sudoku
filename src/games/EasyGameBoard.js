// src/games/GameContainer.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import Title from '../components/Title'
import EasyButton from '../components/EasyButton'
// import './EasyGameBoard.css'
import GameBoard from './GameBoard'


export class EasyGameBoard extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header className="games">
  	  	  <Title content="Easy Game Active" />
  	  	  <GameBoard />
    		</header>

        <main>
        </main>
      </div>
    )}
}

export default EasyGameBoard
// src/games/GameContainer.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import Title from '../components/Title'
import EasyButton from '../components/EasyButton'
// import './GameBoard.css'

export class GameBoard extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header>
  	  	  <Title content="Game Active" />

    		</header>

        <main>
        </main>
      </div>
    )}
}

export default GameBoard
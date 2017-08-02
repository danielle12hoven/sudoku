// src/games/GameContainer.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import Title from '../components/Title'
import EasyButton from '../components/EasyButton'
import MediumButton from '../components/MediumButton'
import HardButton from '../components/HardButton'
import subscribeToGamesService from '../actions/games/subscribe'
import './GamesContainer.css'

export class GamesContainer extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header>
  	  	  <Title content="New Game" />	  	  
    		</header>
        <main className="gameButtons">
          <EasyButton className="gameButtons"/>
  	  	  <MediumButton className="gameButtons"/>
  	  	  <HardButton className="gameButtons"/>  
        
        <header>
          <Title content="Join Game" />      

        </header>
        </main>
      </div>
    )}
}

export default GamesContainer
// src/games/GameContainer.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import Title from '../components/Title'
import EasyButton from '../components/EasyButton'
import MediumButton from '../components/MediumButton'
import HardButton from '../components/HardButton'
import './GamesContainer.css'

export class GamesContainer extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header>
  	  	  <Title content="Games" />	  	  
    		</header>

        <main className="gameButtons">
          <EasyButton />
  	  	  <MediumButton />
  	  	  <HardButton />  
        </main>
      </div>
    )}
}

export default GamesContainer
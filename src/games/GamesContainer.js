// src/games/GameContainer.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import Title from '../components/Title'
import './GamesContainer.css'

export class GamesContainer extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header>
  	  	  <Title content="Games" />
    		</header>

        <main>
        </main>
      </div>
    )}
}

export default GamesContainer
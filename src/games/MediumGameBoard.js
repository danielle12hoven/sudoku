// src/games/GameContainer.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import Title from '../components/Title'
import MediumButton from '../components/MediumButton'
// import './EasyGameBoard.css'

export class MediumGameBoard extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header>
  	  	  <Title content="Medium Game Active" />

    		</header>

        <main>
        </main>
      </div>
    )}
}

export default MediumGameBoard
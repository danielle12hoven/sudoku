// src/games/GameContainer.js
import React, { PureComponent } from 'react'
import Title from '../components/Title'
import HardButton from '../components/HardButton'


export class HardGameBoard extends PureComponent {
render() {
    return(
      <div className="games-wrapper">
	    	<header>
  	  	  <Title content="Hard Game Active" />

    		</header>

        <main>
        </main>
      </div>
    )}
}

export default HardGameBoard
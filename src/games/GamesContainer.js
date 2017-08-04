import React, { PureComponent } from 'react'
import Title from '../components/Title'
import EasyButton from '../components/EasyButton'
import MediumButton from '../components/MediumButton'
import HardButton from '../components/HardButton'
// import subscribeToGamesService from '../actions/games/subscribe'
import './GamesContainer.css'

import Lobby from '../components/Lobby.js'



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
        <header>
          <Title content="Join Game" />
        </header>
        <main>
        <Lobby />
      </main>
      </div>
    )}
}

export default GamesContainer

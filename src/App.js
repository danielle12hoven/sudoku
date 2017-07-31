import React, { Component } from 'react';
import Navigation from './components/Navigation'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
import GamesContainer from './games/GamesContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navigation />
          <GamesContainer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;

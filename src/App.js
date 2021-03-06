import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Navigation from './components/Navigation'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navigation />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;

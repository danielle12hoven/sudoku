import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App';
import GamesContainer from './games/GamesContainer'
import SignIn from './users/SignIn'
import SignUp from './users/SignUp'
import EasyGameBoard from './games/EasyGameBoard'
import MediumGameBoard from './games/MediumGameBoard'
import HardGameBoard from './games/HardGameBoard'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={GamesContainer} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/easy/:gameId" component={EasyGameBoard} />      
        <Route path="/medium/:gameId" component={MediumGameBoard} />      
        <Route path="/hard/:gameId" component={HardGameBoard} />      
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();

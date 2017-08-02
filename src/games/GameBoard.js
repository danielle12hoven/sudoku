import React, { PureComponent } from 'react'
import Store from '../store'
import { history } from '../store'
import { connect } from 'react-redux'
import subscribeToGamesService from '../actions/games/subscribe'
import fetchGames from '../actions/games/fetch'


export class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentWillMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  componentDidMount() {
    const self = this;
    this.unsubscribe = Store.subscribe(function() {
      self.setState(Store.getState());
    });

    this.addSecond = setInterval(function() {
      Store.dispatch({type: 'ADD_SECOND'});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addSecond);
    this.unsubscribe();
  }

  render() {
    if (typeof localStorage.currentGame === 'undefined') {
      history.replace('/');
    }

    return (
      <div>
        <table className="sudoku-table">
        </table>
      </div>
    );
  }
}


function App(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})


export default connect(mapStateToProps, {
  fetchGames,
  App,
  subscribeToGamesService
})(Game)


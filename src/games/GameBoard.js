const React = require('react');
const Store = require('./store');
// const Sudoku = require('./sudoku');
const Boards = require('./boards');
import {Link} from 'react-router';
import { history } from '../store'
import { connect } from 'react-redux'
import API from '../../api'
import Cell from './Cell';
import Controls from './Controls';
import Difficulty from '/Difficulty';
import subscribeToGamesService from '../actions/games/subscribe'
import fetchGames from '../actions/games/fetch'

const api = new API()
const games = api.service('games')


class Game extends React.Component {
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
          <tbody>
            {this.state.game.cells.map(function(line, i) {
              return (
                <tr key={i}>
                  {line.map(function(cell) {
                    return <Cell cell={cell} key={cell.j} />;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <Controls />
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

// module.exports = {App, Game, Index};
export default connect(mapStateToProps, {
  fetchGames,
  App,
  subscribeToGamesService
})(Game)


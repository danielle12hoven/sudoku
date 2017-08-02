const React = require('react');
const Store = require('./store');
// const Sudoku = require('./sudoku');
const Boards = require('./boards');
import {Link} from 'react-router';
import API from '../../api'
import Cell from './Cell';
import Controls from './Controls';
import Difficulty from '/Difficulty';


const api = new API()
const games = api.service('games')


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
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
      location.hash = '/';
      return <div></div>;
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

class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Sudoku</h1>
        <p><Link to="new-game">Start a new game</Link></p>
        {this.hasExistingGame()
          ? <p>or <Link to="play">resume the existing one</Link></p>
          : null}
        <p>The code of this game is on&nbsp;
        <a href="https://github.com/andreynering/sudoku" target="_blank">GitHub</a></p>
      </div>
    );
  }

  hasExistingGame() {
    return (typeof localStorage.currentGame !== 'undefined');
  }
}

function App(props) {
  return (
    <div>
      {props.children}
      <GithubCorner />
    </div>
  );
}

module.exports = {App, DifficultyDialog, Game, Index};
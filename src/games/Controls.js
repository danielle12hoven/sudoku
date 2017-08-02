const React = require('react');
const Store = require('./store');
// const Sudoku = require('./sudoku');
const Boards = require('./boards');
import {Link} from 'react-router';
import API from '../../api'


const api = new API()
const games = api.service('games')



class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentDidMount() {
    const self = this;
    self.unsubscribe = Store.subscribe(function() {
      self.setState(Store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    function f(num) {
      if (num < 10) {
        return '0'+num;
      } else {
        return ''+num;
      }
    }
    return (
      <div className="controls">
        <p><Link to="/">Back</Link></p>
        {Sudoku.isComplete(this.state.game.cells)
          ? <p className="congratulations">Congratulations!</p>
          : <p>Still Playing</p>}
      </div>
    )
  }
}

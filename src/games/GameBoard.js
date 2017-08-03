import React, { PureComponent } from 'react'
import Store from '../store'
// import { history } from '../store'
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
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  // render() {
  //       console.log(this.state.games)
 render() {
  console.log(this.state.games[0])
    var games = this.state.games.map(function(result, i){
      return (
        <div key={i}> {(result.cells[0])} </div>
      )
    });
      return (
        <div >
          {games}
        </div>
      );
  }
}


const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})


export default connect(mapStateToProps, {
  fetchGames,
  subscribeToGamesService
})(Game)


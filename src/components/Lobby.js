import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from  '../actions/games/subscribe'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import WatchGameIcon from 'material-ui/svg-icons/image/remove-red-eye'
import JoinGameIcon from 'material-ui/svg-icons/social/person-add'
import PlayGameIcon from 'material-ui/svg-icons/hardware/videogame-asset'
import WaitingIcon from 'material-ui/svg-icons/image/timelapse'
import './Lobby.css'

class Lobby extends PureComponent {
  componentWillMount() {
    const { subscribed, fetchGames, subscribeToGames } = this.props
    fetchGames()
    if (!subscribed) subscribeToGames()
  }

  goToGame(gameId) {
    const { push } = this.props
    return () => {
      push(`/joinGame/${gameId}`)
    }
  }

  isJoinable(game) {
    if(game.started) return false
    return !!!this.isPlayer(game)
  }

  isPlayer(game) {
    return game.players
      .map((p) => (p.userId))
      .includes(this.props.currentUser._id)
  }

  renderGame(game, index) {
    let ActionIcon = this.isJoinable(game) ? JoinGameIcon : WatchGameIcon

    return (
      <MenuItem
        className="join-menu"
        key={index}
        onClick={this.goToGame(game._Id).bind(this)}
        rightIcon={<ActionIcon />}
        primaryText={`${game.owner.name}'s Game`}
      />
    )

  }

  render() {
    return (
      <div className="Lobby">
        <h1 className="Lobby-title">Lobby!</h1>
          { this.props.games.map(this.renderGame.bind(this))}
      </div>
    )
  }
}

const mapStateToProps = ({ games, currentUser }) => (
  {
    games,
    currentUser,

  }
)

export default connect(mapStateToProps, { fetchGames, subscribeToGames, push })(Lobby)

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import './Buttons.css'
import createGame from '../actions/games/create'


const CustomRaisedButton = (props) => (
<RaisedButton {...props} labelStyle={{...props.labelStyle, opacity: props.disabled ? 0.3 : 1 }} />
);

class HardButton extends PureComponent {
 static propTypes = {
    signedIn: PropTypes.bool,
  }

  handleClick(evt) {
  	this.props.createGame('hard')
  }

render() {
	if(!this.props.signedIn) return null
	return (
		<div className="hardButton">
			<CustomRaisedButton
				label="Hard" 
				className="hardButton"
				onClick={ this.handleClick.bind(this) } 
				content="Hard"
			/>
		</div>
	)
}
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, {createGame})(HardButton)
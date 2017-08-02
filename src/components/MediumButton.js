import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import './Buttons.css'
import createGame from '../actions/games/create'


const CustomRaisedButton = (props) => (
<RaisedButton {...props} labelStyle={{...props.labelStyle, opacity: props.disabled ? 0.3 : 1 }} />
);

class MediumButton extends PureComponent {
 static propTypes = {
    signedIn: PropTypes.bool,
  }

  handleClick(evt) {
  	this.props.createGame('medium')
  }

render() {
	if (!this.props.signedIn) return null
	return (
		<div className="mediumButton">
			<CustomRaisedButton 
				label="Medium"
				className="mediumButton"
				onClick={ this.handleClick.bind(this) }
				content="Medium"
			/>
		</div>
	)
}
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, {createGame})(MediumButton)
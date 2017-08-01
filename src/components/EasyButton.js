import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import { history } from '../store'

class EasyButton extends PureComponent {



	startGame() {
		history.push('/easy')
	}


render() {
	return (
		<RaisedButton
			onClick={ this.startGame }
		/>
		)
}


}


export default EasyButton
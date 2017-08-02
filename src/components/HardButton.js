import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import { history } from '../store'
import './Buttons.css'


const CustomRaisedButton = (props) => (
<RaisedButton {...props} labelStyle={{...props.labelStyle, opacity: props.disabled ? 0.3 : 1 }} />
);

class HardButton extends PureComponent {

	startHard() {
		history.push('/hard')
	}

render() {
	return (
		<div className="hardButton">
			<CustomRaisedButton
				label="Hard" 
				className="hardButton"
				onClick={ this.startHard } 
			/>
		</div>
	)
}


}


export default HardButton
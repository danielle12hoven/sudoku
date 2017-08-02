import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import { history } from '../store'
import './Buttons.css'


const CustomRaisedButton = (props) => (
<RaisedButton {...props} labelStyle={{...props.labelStyle, opacity: props.disabled ? 0.3 : 1 }} />
);

class MediumButton extends PureComponent {

	startMedium() {
		history.push('/medium')
	}

render() {
	return (
		<div className="mediumButton">
			<CustomRaisedButton 
				label="Medium"
				className="mediumButton"
				onClick={ this.startMedium } 
			/>
		</div>
	)
}


}


export default MediumButton
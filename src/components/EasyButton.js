import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import { history } from '../store'


const CustomRaisedButton = (props) => (
<RaisedButton {...props} labelStyle={{...props.labelStyle, opacity: props.disabled ? 0.3 : 1 }} />
);

class EasyButton extends PureComponent {

	startEasy() {
		history.push('/easy')
	}

render() {
	return (
		<div>
			<CustomRaisedButton
				label="Easy"
				className="easyButton"
				onClick={ this.startEasy }
				content="Easy"
				// style={{display: 'inline'}}
			/>
		</div>
	)
}


}


export default EasyButton
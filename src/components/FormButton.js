import React from 'react'

export class FormButton extends React.Component {
	render() {

		const { disabled, label, onClick, type } = this.props
		
		return (
			<button {...{disabled, onClick, type}}>{label}</button>
		)
	}
}

FormButton.propTypes = {
	disabled: React.PropTypes.bool,
	label: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func,
	type: React.PropTypes.string.isRequired
}

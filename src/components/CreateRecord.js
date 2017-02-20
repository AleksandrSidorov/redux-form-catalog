import React from 'react'
import { connect } from 'react-redux'

class CreateRecord extends React.Component {
	render() {
		return (
			<h1>{'Hew Person'}</h1>
		)
	}
}

export default connect()(CreateRecord)
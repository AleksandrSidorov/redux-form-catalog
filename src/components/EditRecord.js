import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { updateRecord } from '../actions/recordActions'

class EditRecord extends React.Component {
	render () {
		return (
			<div>
				<h2>Edit Record</h2>
				<Link to="/">List</Link>
			</div>
		)
	}
}

export default connect()(EditRecord)
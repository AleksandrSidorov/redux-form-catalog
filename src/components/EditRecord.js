import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { updateRecord } from '../actions/recordActions'
import { EditForm } from './PersonForm'

class EditRecord extends React.Component {
	render () {
		return (
			<div>
				<h2>Edit Record</h2>
				<EditForm />
				<Link to="/">List</Link>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (id, values) => {
			dispatch(updateRecord(id, values))
		}
	}
}

export default connect(null, mapDispatchToProps)(EditRecord)
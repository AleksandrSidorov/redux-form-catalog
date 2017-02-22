import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { updateRecord } from '../actions/recordActions'
import { EditForm } from './PersonForm'

class EditRecord extends React.Component {
	render () {

		const { id, record } = this.props
		const initialValues = record
		return (
			<div>
				<h2>{'Edit Record'}</h2>
				<EditForm onSubmit={(values) => this.props.onSubmit(id, values)} {...{initialValues}} />
				<Link to="/">Back to contacts list</Link>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {

	const {
		params: {
			id
		}
	} = ownProps

	const {
		records: {
			records
		}
	} = state

	return {
		id,
		record: records[id]
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (id, values) => {
			dispatch(updateRecord(id, values))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecord)

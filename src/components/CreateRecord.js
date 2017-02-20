import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { addRecord } from '../actions/recordActions'
import { CreateForm } from './PersonForm'

class CreateRecord extends React.Component {
	
	render() {
		return (
			<div>
				<h2>{'New Person'}</h2>
				<CreateForm onSubmit={this.props.onSubmit}/>
				<Link to="/">{'Cancel'}</Link>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (values) => {
			dispatch(addRecord(values))
		}
	}	
}

export default connect(null, mapDispatchToProps)(CreateRecord)
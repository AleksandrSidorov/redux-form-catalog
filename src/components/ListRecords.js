import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class ListRecords extends React.Component {
	render() {
		return (
			<div>
				<h2>{'People'}</h2>
				<Link to="/create">{'Add a new person'}</Link>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		records: state.records
	}
}

export default connect(mapStateToProps)(ListRecords)
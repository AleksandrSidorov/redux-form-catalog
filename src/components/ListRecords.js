import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class ListRecords extends React.Component {
	render() {
		const { records } = this.props
		return (
			<div>
				<h2>{'People'}</h2>
					<ul>
						{Object.keys(records).map((recordKey, key) => {
							const record = records[recordKey]
							return (
								<li {...{key}}>
									<Link to={`/edit/${recordKey}`}>{record.firstName}</Link>
								</li>
							)
						})}
					</ul>
				<Link to="/create">{'Add a new person'}</Link>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		records: state.records.records
	}
}

export default connect(mapStateToProps)(ListRecords)
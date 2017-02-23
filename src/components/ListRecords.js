import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Avatar, RaisedButton, List, ListItem } from 'material-ui'
import Person from 'material-ui/svg-icons/social/person';

import './ListRecords.css'

class ListRecords extends React.Component {
	render() {
		const { records } = this.props
		return (
			<div>
				<h2>{'People'}</h2>
				<List>
					{Object.keys(records).map((recordKey, key) => {
						const record = records[recordKey]
						return (
							<ListItem
								{...{key}}
								leftAvatar={<Avatar icon={<Person />} />}
								primaryText={record.firstName}
								secondaryText={record.email}
								containerElement={<Link to={`/edit/${recordKey}`} />}
							/>
						)
					})}
				</List>
				<RaisedButton
					containerElement={<Link to="/create" />}
					primary={true}
					style={{ width: '170px'}}>
					{'Add a new person'}
			  </RaisedButton>
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

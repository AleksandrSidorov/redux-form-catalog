const recordsActions = {
	addRecord: record => ({ type: 'ADD_RECORD', record }),
	updateRecord: (id, record) => ({ type: 'UPDATE_RECORD', id, record })
}

export default recordsActions

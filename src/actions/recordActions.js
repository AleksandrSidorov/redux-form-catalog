export const addRecord = record => {
	return {
		type: 'ADD_RECORD',
		record
	}
}

export const updateRecord = (id, record) => {
	return {
		type: 'UPDATE_RECORD',
		id,
		record
	}
}
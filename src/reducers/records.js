const records = (state = { maxId: 0, records: {} }, action) => {
	switch (action.type) {
		case 'ADD_RECORD':
			return {
				...state,
				maxId: state.maxId + 1,
				records: {
					...state.records,
					[action.maxId]: action.record
				}
			}
		case 'UPDATE_RECORD':
			return {
				...state,
				records: {
					...state.records,
					[action.id]: action.record
				}
			}
		default:
		   return state
	}
}

export default records
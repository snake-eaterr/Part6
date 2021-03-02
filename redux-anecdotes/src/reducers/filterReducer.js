const initialState = ''

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FILTER':
			return action.data
    default:
      return state
  }
}

export const setFilter = (value) => {
	return {
		type: 'FILTER',
		data: value
	}
}

export default filterReducer
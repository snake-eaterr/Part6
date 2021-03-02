const initialState = null

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SHOW':
			return action.data
		case 'HIDE':
			return null
		default:
			return state
	}
}
let id;

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch({
      type: 'SHOW',
      data: message
    })
    clearTimeout(id)
    id = setTimeout(() => {
      dispatch({
        type: 'HIDE',
        data: null
      })
    }, time * 1000)
    
  }
}


export default notificationReducer
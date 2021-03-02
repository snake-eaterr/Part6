import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const reducer = (state = [], action) => {
  switch(action.type) {
		case 'VOTE': {
			return state.map(anecdote => {
				return anecdote.id !== action.data.id ? anecdote : action.data
			})
		}
		case 'NEW_ANECDOTE': {
			return [...state, action.data]
		}
		case 'INIT':
			return action.data
		default:
			return state
	}
}

export const NewAnecdote = (content) => {
	return async dispatch => {
		const returnedObject = await anecdoteService.NewAnecdote(content)
		dispatch({
			type: 'NEW_ANECDOTE',
			data: returnedObject
		})
	}
}
export const vote = (anecdote) => {
	return async dispatch => {
		const votedAnecdote = await anecdoteService.update(anecdote)
		dispatch({
			type: 'VOTE',
			data: votedAnecdote
		})
	}
}

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({
			type: 'INIT',
			data: anecdotes
		})
	}
} 

export default reducer
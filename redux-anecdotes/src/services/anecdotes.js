import axios from 'axios'
import { asObject } from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const NewAnecdote = async (content) => {
  const response = await axios.post(baseUrl, asObject(content))
  return response.data
}

const update = async (anecdote) => {
  const newObject = {...anecdote, votes: anecdote.votes + 1}
  const returnedObject = await axios.put(`${baseUrl}/${newObject.id}`, newObject)
  return returnedObject.data
}
export default { getAll, NewAnecdote, update }
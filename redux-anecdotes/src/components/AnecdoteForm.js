import React from 'react'
import { NewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const AnecdoteForm = (props) => {

  const NewAnecdoteHanlder = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''

    if(content === '') {
      props.setNotification('form cannot be empty', 5)
      return 
    }
		props.NewAnecdote(content)
    props.setNotification(`you added ${content}`, 5)

	}

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={NewAnecdoteHanlder}>
        <div>
					<input name="anecdote" />
				</div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default connect(null, {NewAnecdote, setNotification})(AnecdoteForm)
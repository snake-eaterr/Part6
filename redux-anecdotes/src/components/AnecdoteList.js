import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

	const voteHandler = (anecdote) => {
    props.vote(anecdote)
    props.setNotification(`you voted ${anecdote.content}`, 5)
  
  }
	let sortedAnecdotes = props.sortedAnecdotes

  if (props.filter !== '') {
    sortedAnecdotes = props.sortedAnecdotes.filter(anec => anec.content.toLowerCase().includes(props.filter))
  }

	return (
		<div>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteHandler(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
	)
}

const mapStateToProps = (state) => {
  const sortedAnecdotes = [...state.anecdotes].sort((a, b) => {
    if (a.votes > b.votes) {
      return -1
    }
	})
  return {
    sortedAnecdotes,
    filter: state.filter
  }
}

export default connect(mapStateToProps, {setNotification, vote})(AnecdoteList)
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note'

const NotesProj = (props) => {
    const [notes, setNotes] = useState([])
    const [noteInput, setNoteInput] = useState("")
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        console.log('effect')
        axios
          .get('http://localhost:3001/notes')
          .then(response => {
            console.log('promise fulfilled')
            setNotes(response.data)
          })
      }, [])
  
    function generateId(){
      const id = Math.floor(Math.random() * 1000000000)
  
      return id
    }
  
    function addNote(event){
      event.preventDefault()
      console.log('button clicked', event.target)
  
      const newNote = {
        content: noteInput,
        important: Math.random() < 0.5,
        id: generateId()
      }
  
      setNotes(prev => prev.concat(newNote))
      setNoteInput('')
    }
  
    function handleNoteInput(event){
      console.log(event.target.value)
      setNoteInput(event.target.value)
    }
  
    function toggleFilter(){
      setShowAll(!showAll)
    }
  
    const notesToShow = showAll ? notes : notes.filter(n => n.important == true)
  
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={toggleFilter}>
          show {showAll ? 'important' : 'all'}
        </button>
        <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input value={noteInput} onChange={handleNoteInput} placeholder='Add note'/>
          <button type='submit'>save</button>
        </form>
      </div>
    )
}

export default NotesProj
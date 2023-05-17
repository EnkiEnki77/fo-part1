import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note'
import { getAll, create, update } from '../services/notes'

const NotesProj = (props) => {
    const [notes, setNotes] = useState([])
    const [noteInput, setNoteInput] = useState("")
    const [showAll, setShowAll] = useState(true)
    

    useEffect(() => {
        console.log('effect')
        getAll()
          .then(initialNotes => {
            console.log('promise fulfilled')
            setNotes(initialNotes)
          })
      }, [])
  
    function addNote(event){
      event.preventDefault()
      console.log('button clicked', event.target)
  
      const newNote = {
        content: noteInput,
        important: Math.random() < 0.5,
      }

      create(newNote)
      .then(returnedNote => {
        setNotes(prev => prev.concat(returnedNote))
        setNoteInput('')
      })
  
      
    }
  
    function handleNoteInput(event){
      console.log(event.target.value)
      setNoteInput(event.target.value)
    }
  
    function toggleFilter(){
      setShowAll(!showAll)
    }

    const toggleImportance = (id) => {
        const url = `http://localhost:3001/notes`
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        console.log(changedNote)

        update(id, changedNote)
        .then(returnedNote => setNotes(notes.map(n => n.id == id ? returnedNote : n)))
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
            <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />
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
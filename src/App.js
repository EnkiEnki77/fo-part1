import { useState } from 'react'
import Note from './components/Note'
import NotesProj from './components/NotesProj'
import PhonebookProj from './components/PhonebookProj'

const App = (props) => {
  return (
    <div>
      {/* <NotesProj/> */}
      <PhonebookProj/>
    </div>
  )
}

export default App
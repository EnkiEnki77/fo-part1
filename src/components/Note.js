const Note = ({note, toggleImportance}) => {
    const label = note.important == true ?
    'important: false' :
    'important: true'
    return (
      <li>
         {note.content}
         <button onClick={toggleImportance}>{label}</button>
      </li>
    )
  }

  export default Note
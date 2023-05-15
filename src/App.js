const Note = (props) => {
  return (
    <li>
       {props.note.content}
    </li>
  )
}

function App({notes}) {
  
  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note}/>)}
      </ul>
    </div>
  );
}

export default App;

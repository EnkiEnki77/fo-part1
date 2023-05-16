import React, { useState } from 'react'

const PhonebookProj = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto', id: 1}
    ])
    const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => {
            return <li key={p.id}>{p.name}</li>
        })}
      </ul>
    </div>
  )
}

export default PhonebookProj
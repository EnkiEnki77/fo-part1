import React, { useState } from 'react'

const PhonebookProj = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto', id: generateId()}
    ])
    const [newName, setNewName] = useState('')

    function handlePhoneForm(event){
        event.preventDefault()

        const nameExists = persons.map(p => p.name).includes(newName)

        console.log(nameExists)

        if(nameExists == true){
            return alert(`${newName} already exists in phonebook`)
        }

        const newPersonInfo = {
            id: generateId(),
            name: newName
        }

        setPersons(persons.concat(newPersonInfo))
        setNewName('')
    }

    function handleNameInput(event){
        setNewName(event.target.value)
    }

    function generateId(){
        const id = Math.floor(Math.random() * 1000000000)

        return id
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePhoneForm}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
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
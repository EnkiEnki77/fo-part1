import React, { useState } from 'react'

const PhonebookProj = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto', id: generateId()}
    ])
    const [newPerson, setNewName] = useState({name: '', number: ''})

    function handlePhoneForm(event){
        event.preventDefault()

        const nameExists = persons.map(p => p.name).includes(newPerson.name)

        console.log(nameExists)

        if(nameExists == true){
            return alert(`${newPerson.name} already exists in phonebook`)
        }

        const newPersonInfo = {
            id: generateId(),
            name: newPerson.name,
            number: newPerson.number
        }

        setPersons(persons.concat(newPersonInfo))
        setNewName({name: '', number: ''})
    }

    function handleNameInput(event){
        const {name, value} = event.target
        console.log(name, value)
        setNewName({...newPerson, [name]: value})
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
          name: <input name='name' value={newPerson.name} onChange={handleNameInput}/>
          number: <input name='number' value={newPerson.number} onChange={handleNameInput}/>
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
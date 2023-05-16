import React, { useState } from 'react'

const PhonebookProj = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
      ])
    const [personsFiltered, setPersonsFiltered] = useState([])
    const [newPerson, setNewName] = useState({name: '', number: ''})
    const [searchVal, setSearchVal] = useState('')

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

    function handleSearchInput(event){
        const {value} = event.target
        const filtered = persons.filter(p => p.name.toLowerCase() == value.toLowerCase())
        console.log(filtered)

        setSearchVal(value)
        setPersonsFiltered(filtered)
    }

    function generateId(){
        const id = Math.floor(Math.random() * 1000000000)

        return id
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <label>
        search: <input value={searchVal} onChange={handleSearchInput}/>
      </label>
      <h2>Add new</h2>
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
      {searchVal.length == 0 ?
        <ul>
            {persons.map(p => {
                return <li key={p.id}>{p.name} {p.number}</li>
            })}
        </ul>
        :
        <ul>
            {personsFiltered.map(p => {
                return <li key={p.id}>{p.name} {p.number}</li>
            })}
        </ul>
      }
      
    </div>
  )
}

export default PhonebookProj
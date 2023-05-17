import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { create, deletion, getAll, update } from '../services/phonebook'

const PhonebookProj = () => {
    const [persons, setPersons] = useState([])
    const [personsFiltered, setPersonsFiltered] = useState([])
    const [newPerson, setNewName] = useState({name: '', number: ''})
    const [searchVal, setSearchVal] = useState('')

    useEffect(serverFetch, [])

    function serverFetch(){
        getAll()
        .then(initPhonebook => setPersons(initPhonebook))
    }

    function handlePhoneForm(event){
        event.preventDefault()

        const nameExists = persons.map(p => p.name).includes(newPerson.name)


        console.log(nameExists)

        const newPersonInfo = {
            name: newPerson.name,
            number: newPerson.number
        }

        if(nameExists == true){
            const oldPersonInfo = persons.find(p => p.name == newPerson.name)
            console.log(oldPersonInfo)
            const updatePersonInfo = {
                ...oldPersonInfo,
                number: newPerson.number
            }

            if(window.confirm(`${newPerson.name} is already added to the phonebook, repplace old number with new one?`)){
                update(updatePersonInfo.id, updatePersonInfo)
                .then(returnedPerson => setPersons(persons.map(p => p.id == returnedPerson.id ? returnedPerson : p)))
            }
            return 
        }

        create(newPersonInfo)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
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

    function deletePhoneNumber(id, event){
        if(window.confirm('Are you sure?')){
            deletion(id)
            .then(deletedNumber => setPersons(persons.filter(p => p.id != id)))
        }
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
                return <div style={{display: 'flex'}} key={p.id}>
                            <li>{p.name} {p.number}</li>
                            <button onClick={() => deletePhoneNumber(p.id)}>delete</button>
                        </div>
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
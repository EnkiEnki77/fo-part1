import React from 'react'

const Course = ({courses}) => {
    console.log(courses)
  return (
    <>
        {courses.map(c => {
            return (
                <div key={c.id}>
                    <h1>{c.name}</h1>
                    <ul>
                        {c.parts.map(p => { 
                            return <li key={p.id}>{p.name} {p.exercises}</li>
                        })}
                    </ul>
                    <p><b>total of {c.parts.map(p => p.exercises).reduce((a, b) => a + b)} exercises.</b></p>
                </div>
            )
        })}
    </>
  )
}

export default Course
import React from 'react'

const Course = ({course}) => {
    console.log(course)
  return (
    <>
        <h1>{course.name}</h1>
        <ul>
            {course.parts.map(c => {
                return <li key={c.id}>{c.name} {c.exercises}</li>
            })}
        </ul>
    </>
  )
}

export default Course
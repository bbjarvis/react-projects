import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <ul key={id} className='person'>
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </ul>
        )
      })}
    </>
  )
}

export default List

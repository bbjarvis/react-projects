import React from 'react'
import Tour from './Tour'
const Tours = (url) => {
  return (
    <>
      {url.map((singleTour) => {
        const { id, name, info, image, price } = singleTour
        return (
          <h1>tours</h1>
          // <ul key={id} className='single-tour'>
          //   <img src={image} alt={name}></img>
          //   <div>
          //     <h4>{name}</h4>
          //     <p>{info} years</p>
          //   </div>
          // </ul>
        )
      })}
    </>
  )
}

export default Tours

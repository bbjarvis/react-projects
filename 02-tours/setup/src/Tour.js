import React, { useState } from 'react'

const Tour = ({ tour }) => {
  const { id, name, info, image, price } = tour
  return (
    <article key={id} className='single-tour'>
      <img src={image} alt={name}></img>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p className='tour-info'>{info}</p>
      </footer>
    </article>
  )
}

export default Tour

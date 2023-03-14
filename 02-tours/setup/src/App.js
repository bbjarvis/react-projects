import React, { useState, useEffect, useCallback } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <main>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>

      {tours.map((tour) => {
        const { id, name, info, image, price } = tour
        return (
          <section>
            <ul key={id} className='single-tour'>
              <article>
                <img className='single-tour img' src={image} alt={name}></img>
                <footer>
                  <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                  </div>
                </footer>
                <p className='tour-info'>{info}</p>
              </article>
            </ul>
          </section>
        )
      })}
    </main>
  )
}

export default App

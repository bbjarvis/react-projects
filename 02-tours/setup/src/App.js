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
      <section>
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
        </div>
        <div>
          {tours.map((tour) => {
            const { id, name, info, image, price } = tour
            return (
              <section>
                <article key={id} className='single-tour'>
                  <img className='single-tour img' src={image} alt={name}></img>

                  <footer className='ingle-tour footer'>
                    <div className='tour-info'>
                      <h4>{name}</h4>
                      <h4 className='tour-price'>${price}</h4>
                    </div>
                  </footer>
                  <p className='tour-info'>{info}</p>
                </article>
              </section>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App

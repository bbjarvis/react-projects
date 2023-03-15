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
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)

      console.log(error)
    }
  }, [])
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <main>
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            refersh
          </button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  )
}

export default App

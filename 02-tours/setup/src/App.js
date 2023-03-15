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
      <Tours tours={tours} />
    </main>
  )
}

export default App

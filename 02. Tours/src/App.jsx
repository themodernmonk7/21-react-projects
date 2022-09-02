import { useEffect } from "react"
import { useState } from "react"
import { Loading, Heading, Tours } from "./components"

const url = "https://course-api.com/react-tours-project"

function App() {
  const [loading, SetLoading] = useState(false)
  const [tours, setTours] = useState([])

  // GET tours data
  const fetchTours = async () => {
    SetLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      SetLoading(false)
      setTours(tours)
    } catch (error) {
      SetLoading(false)
      console.log(error)
    }
  }

  // Remove Tour
  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <>
        <section>
          <Loading />
        </section>
      </>
    )
  }

  if (tours.length === 0) {
    return (
      <>
        <section>
          <h2 className="capitalize font-bold tracking-wide text-3xl text-gray-800">
            No Tours Left
          </h2>
          <button className="refresh-btn" onClick={() => fetchTours()}>
            refresh page
          </button>
        </section>
      </>
    )
  }

  return (
    <>
      <main>
        <section>
          <Heading />
          <div className="mx-5 md:w-4/5 mt-10 grid grid-cols-1 gap-6">
            <Tours tours={tours} removeTour={removeTour} />
          </div>
        </section>
      </main>
    </>
  )
}

export default App

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

  useEffect(() => {
    fetchTours()
    if (loading) {
      return <Loading />
    }
  }, [])

  return (
    <>
      <main className="container mx-auto max-w-3xl h-screen">
        <section className="grid place-items-center">
          <Heading />
          <div className="mx-5 md:w-4/5 mt-4 grid grid-cols-1 gap-6">
            <Tours tours={tours} />
          </div>
        </section>
      </main>
    </>
  )
}

export default App

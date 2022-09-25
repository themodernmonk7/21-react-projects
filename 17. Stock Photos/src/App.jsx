import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { useState } from "react"
import { useEffect } from "react"
import { Hero } from "./components"

// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  const fetchImages = async () => {
    setLoading(true)
    let url
    url = `${mainUrl}?client_id=0OkjcFuPSJZjSwGEuC9e8S7MI6p4YY8vgeSgY9Xa6D4`
    // url = `${mainUrl}${clientID}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <>
      <Hero />
      <Card photos={photos} />
    </>
  )
}

export default App

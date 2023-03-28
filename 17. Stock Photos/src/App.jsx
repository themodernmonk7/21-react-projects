import Card from "./components/Card"
import { useState } from "react"
import { useEffect } from "react"
import { Hero } from "./components"

const clientID = `?client_id=0OkjcFuPSJZjSwGEuC9e8S7MI6p4YY8vgeSgY9Xa6D4`
// const clientID = `${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")

  // Fetch images
  const fetchImages = async () => {
    setLoading(true)
    let url
    const urlPage = `&page${page}`
    const urlQuery = `&query${query}`
    url = `${mainUrl}${clientID}${urlPage}`
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${query}`
    } else {
      url`${mainUrl}${clientID}${urlPage}`
    }
    // url = `${mainUrl}?client_id=${clientID}`
    // url = `${mainUrl}?client_id=0OkjcFuPSJZjSwGEuC9e8S7MI6p4YY8vgeSgY9Xa6D4`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        return [...oldPhotos, ...data]
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [page])

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener("scroll", event)
  }, [])

  return (
    <>
      <Hero />
      <Card photos={photos} />
      {loading && <h2>Loading...</h2>}
    </>
  )
}

export default App

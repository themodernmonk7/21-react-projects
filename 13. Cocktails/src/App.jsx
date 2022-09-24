import { Navbar } from "./components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, About, SingleCocktail, Error } from "./pages"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App

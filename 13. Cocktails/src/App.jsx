import { Navbar } from "./components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, About, SingleCocktail, Error } from "./pages"
import Navbar2 from "./components/Navbar2"

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Navbar2 />
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

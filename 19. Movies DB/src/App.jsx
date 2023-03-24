import Footer from "./Footer"
import MovieLis from "./MovieLis"
import Navbar from "./Navbar"
import SingleMovie from "./SingleMovie"
import Title from "./Title"

function App() {
  return (
    <main className="bg-slate-900 text-white h-screen overflow-auto ">
      <section className="container mx-auto">
        <Navbar />
        {/* <Title /> */}
        {/* <MovieLis /> */}
        <SingleMovie />
      </section>
      <Footer />
    </main>
  )
}

export default App

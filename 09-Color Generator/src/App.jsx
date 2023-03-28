import SingleColor from "./components/SingleColor"
import Values from "values.js"
import { useState } from "react"

function App() {
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values("#f15025").all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="text-center  space-y-4 space-x-4 py-6">
        <h1 className=" font-semibold tracking-widest text-2xl">
          {" "}
          Color Generator
        </h1>
        <form className="space-x-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className={
              error
                ? "border-2 border-red-400  bg-gray-200/40 py-1 md:py-2 rounded-md px-2"
                : "border bg-gray-200/40 py-1 md:py-2 rounded-md px-2"
            }
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            type="submit"
            className=" px-4 py-1 md:py-2 uppercase tracking-widest rounded-md bg-cyan-400 hover:bg-cyan-400/80 shadow-md "
          >
            Submit
          </button>
        </form>
      </section>

      <section className="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 h-screen">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              {...color}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App

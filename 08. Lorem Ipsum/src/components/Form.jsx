import React from "react"
import { useState } from "react"
import Articles from "./Articles"
import data from "../data"

const Form = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleChange = (e) => {
    setCount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="text-slate-700 text-xl font-light pr-4">
          Paragraph:
        </label>
        <input
          type="number"
          value={count}
          name="amount"
          id="amount"
          className="border w-20 px-2 text-gray-500 py-1 rounded-md"
          onChange={(e) => handleChange(e)}
        />
        <button className="border ml-2 px-4 py-1 bg-slate-700 text-white rounded-md shadow-md hover:bg-slate-700/80">
          Generate
        </button>
      </form>
      {/* article */}
      <Articles text={text} />
    </>
  )
}

export default Form

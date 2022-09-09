import { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Article = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <>
      <article className=" border px-4 py-3 space-y-2 shadow-md rounded-sm">
        <header className="flex justify-between items-center">
          <h4 className=" font-medium text-xl">{title}</h4>
          <button
            className="bg-gray-400/20 rounded-full px-2 py-2 text-red-500"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p className="text-gray-700">{info}</p>}
      </article>
    </>
  )
}

export default Article

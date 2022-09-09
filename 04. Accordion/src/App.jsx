import { useState } from "react"
import Article from "./components/Article"
import data from "./constants/data"
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <>
      <main className="bg-slate-700 h-screen pt-24">
        <section className="bg-white container mx-auto max-w-xs md:max-w-4xl flex flex-col md:flex-row p-4 py-10 rounded-md ">
          <div className="px-4 py-2 md:w-1/2 pb-5 ">
            <h1 className=" text-2xl md:text-3xl capitalize font-semibold text-slate-800">
              Questions and answers about login
            </h1>
          </div>
          <div className="w-full grid grid-cols-1 gap-6 pr-4">
            {questions.map((question) => {
              return <Article key={question.id} {...question} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default App

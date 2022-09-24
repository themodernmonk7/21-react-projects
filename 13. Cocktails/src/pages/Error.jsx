import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center mt-10 space-y-4">
          <h1 className="text-2xl">oops! It's a dead end.</h1>
          <Link
            to="/"
            className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg"
          >
            Back to Home Page
          </Link>
        </div>
      </section>
    </>
  )
}

export default Error

import React from "react"
import { useState } from "react"
import people from "../constants/data"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { RiDoubleQuotesR } from "react-icons/ri"

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, text, image } = people[index]

  // check number
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  //   next button
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  // prev person
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  //   random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <>
      {/* article */}
      <article className="rounded-lg relative  text-center bg-slate-800 text-gray-200  px-10 py-2 shadow-inner drop-shadow-2xl shadow-black mb-5 mt-10 max-w-xs md:max-w-xl flex flex-col justify-center items-center pt-4 overflow-hidden ">
        <div className="absolute bg-cyan-500 blur-3xl  w-40 h-40 rounded-full -z-10 top-2"></div>
        <div className="border-2 border-pink-500 p-1 rounded-full shadow-lg relative">
          <img
            src={image}
            alt={name}
            className=" w-32 h-32 object-cover rounded-full "
          />
          <div className="absolute top-0 -left-3 bg-pink-500 px-2 py-2 rounded-full">
            <RiDoubleQuotesR size="25px" />
          </div>
        </div>
        <h4 className="text-xl pt-2 md:text-2xl capitalize font-semibold">
          {name}
        </h4>
        <p className="uppercase font-normal text-pink-500">{job}</p>
        <p className="pt-4 tracking-wide text-base md:text-lg  ">{text}</p>
        <div className="space-x-10 mt-4">
          <button
            onClick={prevPerson}
            className="rounded-full px-1 py-1  bg-pink-500 shadow-lg shadow-pink-500/50"
          >
            <GrFormPrevious size="20px" />
          </button>
          <button
            onClick={nextPerson}
            className=" rounded-full px-1 py-1  bg-pink-500 shadow-lg shadow-pink-500/50"
          >
            <GrFormNext size="20px" />
          </button>
        </div>
        <button
          onClick={randomPerson}
          className="uppercase my-4 text-sm  py-1 rounded-lg px-4 font-semibold tracking-wide bg-pink-500 shadow-lg shadow-pink-500/50"
        >
          surprise me
        </button>
      </article>
    </>
  )
}

export default Review

import React from "react"
import poster from "./assets/Poster1.jpg"
import { BsClock, BsAward, BsStarFill } from "react-icons/bs"
import { SiRottentomatoes } from "react-icons/si"

const SingleMovie = () => {
  return (
    <>
      <section className=" my-20">
        <div className="flex justify-center items-center flex-col lg:flex-row px-8 sm:px-0">
          {/* right */}
          <div className="lg:w-1/2 flex justify-center items-center ">
            <img
              src={poster}
              alt=""
              className="lg:w-96 h-full object-cover object-center  shadow-lg shadow-yellow-400/30 transition duration-700 ease-in-out transform hover:skew-y-3 hover:translate-x-12"
            />
          </div>
          {/* left */}
          <div className="lg:w-1/2 space-y-4 my-10 ">
            <h2 className="text-3xl md:text-5xl font-bold">
              Avengers: Endgame
            </h2>
            <div className="flex space-x-4">
              <p className="text-gray-400 font-medium text-sm flex justify-center items-center">
                2019 • <span className="pl-1">181 min • </span>{" "}
                <span className="pl-1">Action, Adventure</span>
              </p>
            </div>
            <div className="flex justify-start  pt-2 text-gray-400">
              <div className="flex flex-col space-y-1 border-r border-gray-400 pr-5">
                <p className="flex justify-center items-center font-bold text-gray-300 ">
                  8.4
                  <span className="text-yellow-500 text-xs pl-1">
                    <BsStarFill />{" "}
                  </span>
                </p>
                <p className="text-xs">IMDB Rating</p>
              </div>
              <div className="flex flex-col space-y-1 border-r border-gray-400 px-5">
                <p className="flex justify-center items-center font-bold text-gray-300">
                  <span className="pr-1 text-red-600 text-xs">
                    <SiRottentomatoes />
                  </span>
                  94%
                </p>
                <p className="text-xs">Rotten Tomatoes</p>
              </div>

              <div className="flex flex-col items-center  space-y-1 border-r-none px-5">
                <p className="font-bold text-gray-300">PG-13</p>
                <p className="text-xs">Rating</p>
              </div>
            </div>
            <p className="text-lg pt-6">
              After the devastating events of Avengers: Infinity War (2018), the
              universe is in ruins. With the help of remaining allies, the
              Avengers assemble once more in order to reverse Thanos' actions
              and restore balance to the universe.
            </p>

            <div className="space-y-4 pt-6">
              <p className="border-b-2  border-yellow-400 pb-2">
                Language :{" "}
                <span className="text-gray-400">
                  English, Japanese, Xhosa, German
                </span>
              </p>
              <p className="border-b-2  border-yellow-400 pb-4">
                Actors :{" "}
                <span className="text-gray-400">
                  Robert Downey Jr., Chris Evans, Mark Ruffalo
                </span>
              </p>
              <p className="border-b-2  border-yellow-400 pb-4">
                Director :{" "}
                <span className="text-gray-400">Anthony Russo, Joe Russon</span>
              </p>
              <p className="border-b-2  border-yellow-400 pb-4">
                Writer :{" "}
                <span className="text-gray-400">
                  Christopher Markus, Stephen McFeely, Stan Lee
                </span>
              </p>
              <p className="border-b-2  border-yellow-400 pb-4">
                Awards :{" "}
                <span className="text-gray-400">
                  Nominated for 1 Oscar. 70 wins & 132 nominations total
                </span>
              </p>
              <p className="border-b-2  border-yellow-400 pb-4">
                Country : <span className="text-gray-400">United States</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleMovie

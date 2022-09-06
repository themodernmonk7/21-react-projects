import { useState } from "react"
import data from "./constants/data"
import { AiFillStar } from "react-icons/ai"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { useEffect } from "react"

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  return (
    <main className=" h-screen container mx-auto  flex justify-center items-center relative ">
      <section className=" w-3/4 mx-auto bg-white rounded-md shadow-2xl p-8 space-y-4 xl:w-1/2 relative">
        <div className="w-2 h-2 bg-fuchsia-500 rounded-full absolute left-8 md:left-16 top-16 z-10 opacity-70 "></div>
        <div className="w-2 h-2 bg-cyan-500 rounded-full absolute right-1/4 top-2/4 z-10 opacity-70"></div>

        <div className="w-3 h-3 bg-orange-500 rounded-full absolute left-1/4 top-1/3 z-10 opacity-70"></div>

        <div className="w-4 h-4 bg-pink-500 rounded-full absolute bottom-16 left-10 opacity-70 z-10"></div>

        <div className="w-3 h-3 opacity-70 bg-yellow-500 rounded-full absolute right-20 bottom-10 z-10"></div>
        {/* <!--top title --> */}
        <div className="text-center space-y-2 flex flex-col justify-center items-center">
          <h1 className="font-semibold capitalize ">
            <mark className="">What Our Client says</mark>
          </h1>
          <p className="text-gray-500">
            Our clients send us bunch of smilies with our services and we love
            them
          </p>
        </div>

        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          return (
            <section key={id}>
              {/* <!-- image --> */}
              <div className="flex justify-center items-center ">
                <img
                  src={image}
                  className="shadow-lg object-center object-cover rounded-full  w-24 h-24"
                  alt=""
                />
              </div>

              {/* <!-- info --> */}
              <header className=" flex flex-col justify-center items-center relative">
                <span className="absolute opacity-30  bottom-0 text-gray-300 right-20">
                  {" "}
                  <FaQuoteRight size="50px" />{" "}
                </span>
                <span className="absolute opacity-30  bottom-18 left-24 text-gray-300">
                  {" "}
                  <FaQuoteLeft size="50px" />{" "}
                </span>

                <h2 className=" font-semibold tracking-wider">{name}</h2>
                <p className="text-gray-500 text-sm">{title}</p>
                <p className="flex pt-3 text-yellow-400 space-x-1">
                  <span>
                    {" "}
                    <AiFillStar />{" "}
                  </span>
                  <span>
                    {" "}
                    <AiFillStar />{" "}
                  </span>
                  <span>
                    {" "}
                    <AiFillStar />{" "}
                  </span>
                  <span>
                    {" "}
                    <AiFillStar />{" "}
                  </span>
                  <span>
                    {" "}
                    <AiFillStar />{" "}
                  </span>
                </p>
                <p className=" w-4/6 text-center pt-3">{quote}</p>
              </header>
            </section>
          )
        })}

        <button className=" absolute left-5 md:left-10 bottom-40 z-10 ">
          {" "}
          <BsArrowLeft size="25px" />
        </button>
        <div className="absolute bottom-40 left-3 md:left-8 h-6 w-6 bg-yellow-500 rounded-full opacity-50"></div>
        <button className=" absolute right-5 md:right-10  bottom-40 z-10">
          {" "}
          <BsArrowRight size="25px" />{" "}
        </button>
        <div className="absolute bottom-40 right-3 md:right-8 h-6 w-6 bg-yellow-500 rounded-full opacity-50  "></div>

        {/* <button className="absolute inset-y-0 right-5 md:right-10">
          {" "}
          <BsArrowRight size="25px" />{" "}
        </button> */}
      </section>
    </main>
  )
}

export default App

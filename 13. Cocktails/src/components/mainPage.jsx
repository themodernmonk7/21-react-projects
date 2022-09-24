import React from "react"
import Image1 from "../assets/Burger.jpg"
import { HiOutlinePlus } from "react-icons/hi"

const MainPage = () => {
  return (
    <>
      <section className="container mx-auto max-w-3xl mt-10 flex flex-col justify-center items-center space-y-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg">
          Back to Home
        </button>
        <div className="flex flex-col md:flex-row justify-center items-center border">
          <div className="w-1/2 ">
            <img src={Image1} alt="" className=" w-full h-full object-cover" />
          </div>
          <div className="w-1/2 px-4 py-6 space-y-4 capitalize">
            <p className="">
              <span className="  px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                Name
              </span>
              <span>A1</span>
            </p>
            <p>
              {" "}
              <span className=" px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                {" "}
                Category:
              </span>{" "}
              cocktail
            </p>
            <p>
              {" "}
              <span className="px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700 capitalize">
                Info:
              </span>{" "}
              Alcoholic
            </p>
            <p>
              <span className="px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                {" "}
                Glass:
              </span>{" "}
              cocktail Glass
            </p>
            <p>
              <span className="px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                Instructions:
              </span>{" "}
              Pour All Ingredients Into A Cocktail Shaker, Mix And Serve Over
              Ice Into A Chilled Glass.
            </p>
            <p className="space-x-2">
              {" "}
              <span className="px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                Ingredients:
              </span>
              <span>Gin</span>
              <span>Grand Marnier</span>
              <span>Lemon Juice</span>
              <span>Grenadine</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainPage

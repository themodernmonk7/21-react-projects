import React from "react"
import Image1 from "../assets/Burger.jpg"
import { HiOutlinePlus } from "react-icons/hi"

const Hero = () => {
  return (
    <section className="container mx-auto gap-5 mt-10 grid grid-cols-2 md:grid-cols-3 max-w-3xl px-2 md:px-0">
      <article className="border bg-gray-200/30 flex flex-col justify-center items-center p-4 rounded-lg relative shadow-md">
        <img
          src={Image1}
          alt=""
          className=" w-full h-40 object-cover  rounded-md"
        />
        <div className=" text-center mt-2 ">
          <h3 className="text-2xl font-medium tracking-wide">Apello</h3>
          <p className="text-sm text-gray-500 capitalize">Cocktail Glass</p>
          <p className="text-xs bg-green-500/30 md:mx-14 px-2 rounded-full text-gray-600 mt-3">
            Non alcoholic
          </p>
        </div>
        <button className="absolute bottom-5 right-3 border bg-green-500 px-2 py-2 shadow-lg text-white rounded-full hover:bg-green-500/90">
          <HiOutlinePlus />
        </button>
      </article>
      <article className="border bg-gray-200/30 flex flex-col justify-center items-center p-4 rounded-lg relative shadow-md">
        <img
          src={Image1}
          alt=""
          className=" w-full h-40 object-cover  rounded-md"
        />
        <div className=" text-center mt-2 ">
          <h3 className="text-2xl font-medium tracking-wide">Apello</h3>
          <p className="text-sm text-gray-500 capitalize">Cocktail Glass</p>
          <p className="text-xs bg-green-500/30 mx-14 px-2 rounded-full text-gray-600 mt-3">
            Non alcoholic
          </p>
        </div>
        <button className="absolute bottom-5 right-3 border bg-green-500 px-2 py-2 shadow-lg text-white rounded-full hover:bg-green-500/90">
          <HiOutlinePlus />
        </button>
      </article>
      <article className="border bg-gray-200/30 flex flex-col justify-center items-center p-4 rounded-lg relative shadow-md">
        <img
          src={Image1}
          alt=""
          className=" w-full h-40 object-cover  rounded-md"
        />
        <div className=" text-center mt-2 ">
          <h3 className="text-2xl font-medium tracking-wide">Apello</h3>
          <p className="text-sm text-gray-500 capitalize">Cocktail Glass</p>
          <p className="text-xs bg-green-500/30 mx-14 px-2 rounded-full text-gray-600 mt-3">
            Non alcoholic
          </p>
        </div>
        <button className="absolute bottom-5 right-3 border bg-green-500 px-2 py-2 shadow-lg text-white rounded-full hover:bg-green-500/90">
          <HiOutlinePlus />
        </button>
      </article>
    </section>
  )
}

export default Hero

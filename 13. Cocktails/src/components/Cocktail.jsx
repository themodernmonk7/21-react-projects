import React from "react"
import { HiOutlinePlus } from "react-icons/hi"
import { Link } from "react-router-dom"

const Cocktail = ({ id, glass, image, info, name }) => {
  return (
    <>
      <Link to={`/cocktail/${id}`}>
        <article className="border bg-gray-200/40 flex flex-col justify-center items-center p-4 rounded-lg relative shadow-md">
          <img
            src={image}
            alt={name}
            className=" w-full  object-cover object-center rounded-md"
          />
          <div className=" text-center mt-2 ">
            <h3 className="text-2xl font-medium tracking-wide">{name}</h3>
            <p className="text-sm text-gray-500 capitalize">{glass}</p>
            <p className="text-xs bg-green-500/30 md:mx-14 px-2 rounded-full text-gray-600 mt-3">
              {info}
            </p>
          </div>
          <button className="absolute bottom-5 right-3 border bg-green-500 px-2 py-2 shadow-lg text-white rounded-full hover:bg-green-500/90">
            <HiOutlinePlus />
          </button>
        </article>
      </Link>
    </>
  )
}

export default Cocktail

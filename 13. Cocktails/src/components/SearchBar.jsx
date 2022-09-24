import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

const SearchBar = () => {
  return (
    <>
      <section className="container mx-auto flex justify-center items-center mt-10">
        <form className="flex flex-col space-y-2 relative">
          <label className="text-2xl capitalize font-light tracking-wider">
            {" "}
            Search your favorite cocktail
          </label>
          <input
            type="text"
            placeholder="Search..."
            className="border shadow-md py-2 px-4 placeholder:font-light rounded-full"
          />
          <span className="absolute right-4 bottom-2 text-gray-500">
            <AiOutlineSearch size="25px" />
          </span>
        </form>
      </section>
    </>
  )
}

export default SearchBar

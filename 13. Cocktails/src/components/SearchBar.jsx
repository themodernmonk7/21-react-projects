import React from "react"
import { useRef, useEffect } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { useGlobalContext } from "../context/context"

const SearchBar = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef("")

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="container mx-auto flex justify-center items-center mt-10">
        <form
          className="flex flex-col space-y-2 relative"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="name"
            className="text-2xl capitalize font-light tracking-wider"
          >
            {" "}
            Search your favorite cocktail
          </label>
          <input
            type="text"
            id="name"
            placeholder="Search..."
            className="border shadow-md py-2 px-4 placeholder:font-light rounded-full"
            onChange={searchCocktail}
            ref={searchValue}
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

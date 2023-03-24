import React from "react"
import Logo from "./Logo"
import { AiOutlineSearch } from "react-icons/ai"

const Navbar = () => {
  return (
    <nav className="mt-8 flex items-center justify-between">
      {/* right */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 md:w-2/3 w-full items-center ">
        <Logo />
        <form className=" w-full px-8 md:px-0">
          <div className="relative flex items-center text-gray-500 focus-within:text-white">
            <AiOutlineSearch className="absolute ml-3 w-5 h-5 pointer-events-none" />{" "}
            <input
              type="text"
              placeholder="Search for Movies, TV Series, Celebrities & more"
              className="py-3 pr-3 pl-10 text-white w-full px-4 bg-slate-800 placeholder:text-gray-500  border-none focus:outline-none  focus:ring-yellow-400/50 focus:ring-2 "
            />{" "}
          </div>
        </form>
      </div>
      {/* left */}
      <div className="hidden md:flex space-x-10">
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  )
}

export default Navbar

import React from "react"

const Navbar = () => {
  return (
    <>
      <nav className=" flex justify-around py-6 shadow-md">
        <span className="uppercase tracking-widest text-2xl">Drinkpie</span>
        <ul className="flex space-x-8 uppercase tracking-wide">
          <li className="hover:border-b-2 border-green-400">Home</li>
          <li className="hover:border-b-2 border-green-400">About</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

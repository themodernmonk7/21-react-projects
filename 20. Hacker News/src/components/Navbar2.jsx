import React from "react"

const Navbar2 = () => {
  return (
    <>
      <nav className="bg-black text-green-400 font-semibold flex justify-around py-4 ">
        <h1>daisyUI</h1>
        <ul className="flex space-x-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar2

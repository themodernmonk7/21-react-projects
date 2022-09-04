import React from "react"
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineSearch,
} from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"

const Navbar = () => {
  return (
    <nav className=" flex justify-between px-10 py-5 items-center shadow-lg text-sm relative ">
      {/* Logo */}
      <div className="flex space-x-6">
        <h1>
          Redux <span>Gear</span>{" "}
        </h1>
        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6 uppercase font-semibold text-gray-800">
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Home & Living</a>
          </li>
          <li>
            <a href="#">Beauty</a>
          </li>
          <li className="relative">
            <a href="#">Studio</a>
            <span className="text-primary text-[10px] absolute -top-2 font-semibold ">
              new
            </span>
          </li>
        </ul>
      </div>
      {/* Search */}
      <form className="w-80 hidden md:flex justify-center items-center border-transparent">
        <span className="bg-gray-100 px-2 py-2">
          {" "}
          <HiOutlineSearch size="20px" />{" "}
        </span>
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className=" w-full bg-gray-100 py-2 px-2 rounded-sm"
        />
      </form>

      {/* Profile icons */}
      <div className="flex space-x-6">
        <button className=" hidden md:flex flex-col justify-center items-center text-xs">
          {" "}
          <HiOutlineUser size="18px" />{" "}
          <span className="font-semibold">Profile</span>
        </button>
        <button className=" flex flex-col justify-center items-center text-xs">
          {" "}
          <AiOutlineHeart size="18px" />{" "}
          <span className="font-semibold">Wishlist</span>
        </button>
        <button className=" flex flex-col justify-center items-center text-xs relative">
          {" "}
          <HiOutlineShoppingBag size="18px" />{" "}
          <span className="font-semibold">Bag</span>
          <span className="bg-primary rounded-full text-white absolute w-4 h4 -top-2 -right-2">
            4
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

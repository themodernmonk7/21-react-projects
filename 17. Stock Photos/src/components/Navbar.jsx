import React from "react"
import mainLogo from "../assets/image_4.jpg"
import { AiOutlineSearch } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi"

const Navbar = () => {
  const backgroundImageStyle = {
    backgroundImage: `URL("${mainLogo}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
  }

  return (
    <>
      {/* Navbar */}
      <nav className="relative" style={backgroundImageStyle}>
        <a href="#" className="absolute bottom-5 right-3 md:right-8 ">
          <p className="text-sm text-gray-400 opacity-70 font-semibold hover:text-gray-200 transition-all duration-300 ease-linear ">
            <span className="">Photo by</span>
            <span className="text-gray-200 "> Irina Iriser</span>
          </p>
        </a>
        <div className="flex justify-between items-center py-4 px-8 md:px-24">
          {/* Logo */}
          <div className="text-white text-2xl hover:text-gray-400 transition-all duration-300 ease-linear">
            <a href="#">
              <h1>Pexels</h1>
            </a>
          </div>
          {/* menu items */}
          <div className="flex justify-center items-center space-x-10 text-white">
            <ul className="hidden md:flex justify-center items-center space-x-6 text-lg font-normal ">
              <li className="hover:text-gray-400 transition-all duration-300 ease-linear">
                {" "}
                <a href="#"> Explore </a>
              </li>
              <li className="hover:text-gray-400 transition-all duration-300 ease-linear">
                {" "}
                <a href="#"> License </a>
              </li>
              <li className="hover:text-gray-400 transition-all duration-300 ease-linear">
                {" "}
                <a href="#"> Upload </a>
              </li>
              <li className="hover:text-gray-400 transition-all duration-300 ease-linear">
                {" "}
                <a href="#">
                  {" "}
                  <BiDotsHorizontalRounded size="25px" />{" "}
                </a>
              </li>
            </ul>
            <button className="bg-white text-black px-4 h-[50px] rounded-md text-lg">
              Join
            </button>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="text-white space-y-8 flex flex-col justify-center items-center mt-16 md:mt-20 px-4 ">
            <h2 className=" md:w-3/5 text-3xl font-semibold ">
              The best free stock photos, royalty free images & videos shared by
              creators.
            </h2>
            <form className="w-full md:w-3/5 flex justify-center items-center  relative">
              <input
                type="text"
                placeholder="Search for free photos"
                className=" px-3 py-3 w-full font-semibold rounded-md border-none tracking-wide   "
              />
              <span className=" absolute right-0 top-1 text-gray-500  px-2 py-2 text-center">
                {" "}
                <AiOutlineSearch size="25px" />{" "}
              </span>
            </form>
            <h4 className=" text-[15px] w-full md:w-3/5 flex items-center space-x-2 md:text-lg">
              <span className="text-gray-300">Trending: </span>
              <span className="font-semibold">
                sunset, space, abstract, sky, dark
              </span>
              <span className="hidden md:flex ml-2 bg-gray-400/50 rounded-full hover:bg-gray-400/50 hover:text-gray-300/70 transition-all duration-200 ease-linear">
                <a href="#">
                  <BiDotsHorizontalRounded size="25px" />{" "}
                </a>
              </span>
            </h4>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

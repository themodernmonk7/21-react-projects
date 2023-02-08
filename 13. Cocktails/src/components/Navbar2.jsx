import React, { useState } from "react"

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <nav className=" bg-slate-700 text-white py-6 flex justify-between px-28 ">
        <div className="">Navbar</div>
        <div className=" relative ">
          <button
            className=" bg-white text-black w-12 h-12 text-xl rounded-full "
            onClick={() => setShowMenu(!showMenu)}
          >
            S
          </button>
          {showMenu ? (
            <div className=" absolute right-5  top-16 bg-gray-200 text-black px-6 py-4 space-y-2 rounded-md ">
              <p>Profile</p>
              <p>Settings</p>
              <p>Tools</p>
              <p>Analytics</p>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  )
}

export default Navbar2

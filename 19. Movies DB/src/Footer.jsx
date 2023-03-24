import React from "react"
import Logo from "./Logo"

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-800 flex flex-col justify-center items-center py-6 space-y-2">
        <Logo />
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-14 justify-center items-center text-gray-400">
          <p>Contact</p>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <p className="text-gray-400 pt-2">2022 Vodutv.com</p>
      </footer>
    </>
  )
}

export default Footer

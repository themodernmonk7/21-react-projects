import { Link } from "react-router-dom"
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <>
      <nav className=" flex justify-around items-center py-6 shadow-md">
        {/* <img src={Logo} className="w-16 h-16" alt="" /> */}
        <span className="uppercase tracking-widest text-2xl">Drinkpie</span>
        <ul className="flex space-x-8 uppercase tracking-wide">
          <li className="hover:border-b-2 border-green-400">
            {" "}
            <Link to="/"> Home </Link>
          </li>
          <li className="hover:border-b-2 border-green-400">
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

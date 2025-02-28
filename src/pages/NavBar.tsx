import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-oxford-blue text-white border-b-6 border-vista-blue shadow-md fixed top-0 left-0 w-full z-10">
      <div className="flex flex-row items-center justify-between p-6 mx-auto">
        {/* Menu Toggle Button (visible sur mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-8 h-8 text-white" />
          ) : (
            <FiMenu className="w-8 h-8 text-white" />
          )}
        </button>
        {/* Logo */}
        <div className="md:w-full md:flex md:flex-row md:justify-center">
          <h1 className="text-2xl font-bold hover:text-gray-300 ">
            Amandine Moigno
          </h1>
        </div>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen
            ? "block fixed text-left transition-all duration-300 ease-in-out rounded-2xl bg-vista-blue border-oxford-blue border-4 w-full h-auto font-bangers text-icterine text-3xl underline"
            : "hidden"
        }  md:block md:mb-2 bg-oxford-blue md:font-orbitron md:text-sm md:text-white`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 px-6 md:py-0 md:justify-center">
          <li className="py-3 md:py-0">
            <a href="#about" className="hover:text-gray-300">
              À propos
            </a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#formations" className="hover:text-gray-300">
              Formations
            </a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#experiences" className="hover:text-gray-300">
              Expériences
            </a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#competences" className="hover:text-gray-300">
              Compétences
            </a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#portfolio" className="hover:text-gray-300">
              Portfolio
            </a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#funfacts" className="hover:text-gray-300">
              Fun Facts
            </a>
          </li>
          <li className="py-3 md:py-0">
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

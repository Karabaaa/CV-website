import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="flex flex-row items-center justify-between p-6 mx-8">
        {/* Logo */}
        <div className="md:w-full md:flex md:flex-row md:justify-center">
          <h1 className="text-2xl font-bold hover:text-gray-300 ">
            Amandine Moigno
          </h1>
        </div>
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
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen
            ? "block fixed top-19 right-0 pr-4 text-right w-auto transition-all duration-300 ease-in-out rounded-bl-2xl"
            : "hidden"
        }  md:block md:mb-2 bg-gray-800`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 px-6 pt-0 pb-6 md:py-0 md:px-6 md:justify-center">
          <li>
            <a href="#home" className="hover:text-gray-300 pt-0">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              À propos
            </a>
          </li>
          <li>
            <a href="#formations" className="hover:text-gray-300">
              Formations
            </a>
          </li>
          <li>
            <a href="#experiences" className="hover:text-gray-300">
              Expériences
            </a>
          </li>
          <li>
            <a href="#competences" className="hover:text-gray-300">
              Compétences
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-gray-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#funfacts" className="hover:text-gray-300">
              Fun Facts
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

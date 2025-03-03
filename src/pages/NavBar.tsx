import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import ContactButton from "../components/ContactButton"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-blue-950 to-teal-700  text-white shadow-[0_4px_6px_3px_rgba(0,0,0,0.5)] fixed top-0 left-0 w-full z-20">
      <div className="w-full flex flex-row items-center justify-around p-6 mx-auto">
        {/* Menu Toggle Button (visible sur mobile) */}
        <button
          /*className="md:hidden"*/
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-8 h-8 text-white cursor-pointer" />
          ) : (
            <FiMenu className="w-8 h-8 text-white cursor-pointer" />
          )}
        </button>
        {/* Logo */}
        <div className="flex justify-center items-center gap-x-2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold font-space-time-regular mb-2  ">
              Amandine Moigno
            </h1>
            <h2 className=" text-base sm:text-lg md:text-xl font-orbitron">
              Web developer
            </h2>
          </div>
          <span>
            <img
              src="/assets/cat-astronaut-1.png"
              alt="cat astronaut"
              className="h-20"
            />
          </span>
        </div>
        <div className="hidden sm:flex sm:items-center sm:justify-center">
          <ContactButton />
        </div>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen
            ? "block fixed text-left p-6 transition-all duration-300 ease-in-out rounded-2xl bg-gray-100 border-blue-950 border-4 w-full sm:w-1/2 md:w-1/4 h-auto font-stjedise text-blue-950 text-2xl overflow-y-auto max-h-screen pb-10"
            : "hidden"
        }`}
      >
        {/* ANCIEN LAYOUT: md:block md:mb-2 md:bg-none md:font-quicksand uppercase md:text-sm md:text-white font-bold*/}
        <div className="flex flex-col space-y-4 font-stjedise">
          {/* ANCIEN LAYOUT : md:flex-row md:space-x-4 px-6 md:py-0 md:justify-center*/}
          <p
            className="font-stjedise py-3 md:py-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a
              href="#about"
              className="hover:text-african-violet hover:underline"
            >
              À propos
            </a>
          </p>
          <p
            className="font-stjedise py-3 md:py-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a
              href="#formations"
              className="hover:text-african-violet hover:underline"
            >
              Formations
            </a>
          </p>
          <p
            className="font-stjedise py-3 md:py-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a
              href="#experiences"
              className="hover:text-african-violet hover:underline"
            >
              Expériences
            </a>
          </p>
          <p
            className="font-stjedise py-3 md:py-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a
              href="#competences"
              className="hover:text-african-violet hover:underline"
            >
              Compétences
            </a>
          </p>
          <p
            className="font-stjedise py-3 md:py-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a
              href="#portfolio"
              className="hover:text-african-violet hover:underline"
            >
              Portfolio
            </a>
          </p>
          <p
            className="font-stjedise py-3 md:py-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a
              href="#funfacts"
              className="hover:text-african-violet hover:underline"
            >
              Fun Facts
            </a>
          </p>
          <p
            className="font-stjedise py-3 md:py-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a
              href="#contact"
              className="hover:text-african-violet hover:underline"
            >
              Contact
            </a>
          </p>
        </div>
      </nav>
    </header>
  )
}

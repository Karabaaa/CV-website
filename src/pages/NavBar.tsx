import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import ContactButton from "../components/ContactButton"
import LanguageSwitcher from "../components/LanguageSwitcher"
import { useTranslation } from "react-i18next"

export default function NavBar() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.formations"), href: "#formations" },
    { name: t("navbar.experiences"), href: "#experiences" },
    { name: t("navbar.skills"), href: "#competences" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Fun Facts", href: "#funfacts" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="bg-gradient-to-r from-blue-950 to-teal-700 text-white shadow-[0_4px_6px_3px_rgba(0,0,0,0.5)] fixed top-0 left-0 w-full z-20">
      <div className="w-full flex flex-row items-center justify-around p-6 mx-auto">
        {/* Menu Toggle Button (visible sur mobile) */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FiX className="w-8 h-8 text-white cursor-pointer" />
          ) : (
            <FiMenu className="w-8 h-8 text-white cursor-pointer" />
          )}
        </button>

        {/* Logo */}
        <div className="flex justify-center items-center gap-x-2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold font-space-time-regular mb-2">
              Amandine Moigno
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-orbitron">
              Web developer
            </h2>
          </div>
          <span className="hidden sm:block">
            <img
              src="/assets/cat-astronaut-1.png"
              alt="cat astronaut"
              className="h-20"
            />
          </span>
        </div>

        <div className="hidden md:flex md:items-center md:justify-center">
          <ContactButton />
        </div>
        <div className="flex items-center justify-center">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen
            ? "block fixed text-left p-6 transition-all duration-300 ease-in-out rounded-2xl bg-gray-100 border-blue-950 border-4 w-full sm:w-1/2 md:w-1/4 h-auto text-blue-950 text-2xl overflow-y-auto max-h-screen pb-10"
            : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map(({ name, href }) => (
            <h3
              key={name}
              className="font-orbitron font-bold py-3 md:py-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <a
                href={href}
                className="hover:text-african-violet hover:underline"
              >
                {name}
              </a>
            </h3>
          ))}
        </div>
      </div>
    </header>
  )
}

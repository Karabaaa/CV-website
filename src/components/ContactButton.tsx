import { useState } from "react"
import { motion } from "framer-motion"
import { FaPhone, FaHome, FaEnvelope, FaGithub } from "react-icons/fa"

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {/* Bouton Contactez-moi */}
      <motion.button
        onClick={handleToggle}
        className="relative px-5 py-2 text-md font-bold uppercase cursor-pointer bg-gradient-to-t from-gray-700 to-african-violet text-white border-b-4 border-gray-800 rounded-lg shadow-[0px_5px_10px_rgba(0,0,0,0.5)] transition-transform transform hover:translate-y-[-1px] active:translate-y-1"
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 bg-gradient-to-tl from-pink-500 via-purple-500 to-blue-500 opacity-20 rounded-lg"></span>
        <span className="relative z-10 font-orbitron">Contactez-moi</span>
      </motion.button>

      {/* Pop-up (carte de visite) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-85 p-6 bg-white border-african-violet border-6 text-african-violet rounded-sm shadow-[0px_4px_15px_rgba(0,0,0,0.3)]"
          >
            {/* Bouton de fermeture */}
            <button
              onClick={handleToggle}
              className="absolute top-2 right-3 text-lg text-gray-400 cursor-pointer hover:text-pink-900"
            >
              ✕
            </button>

            {/* Contenu de la carte de visite */}
            <div className="text-center mx-auto">
              <h2 className="text-2xl font-bold font-space-time-regular text-african-violet">
                Amandine Moigno
              </h2>
              <p className="text-lg italic font-orbitron text-gray-400">
                Développeuse Web
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm text-center mx-auto">
              {/* Contact Info */}
              <ul className=" flex flex-col space-y-4 items-start">
                <li className=" flex flex-row justify-start items-center gap-1 text-left mx-auto overflow-visible w-[80%] max-w-[250px]">
                  <FaEnvelope className="w-4 h-4 mr-4 text-african-violet" />
                  <a
                    href="mailto:amandine.moigno@gmail.com"
                    className="hover:underline text-gray-400 cursor-pointer hover:text-pink-900"
                  >
                    amandine.moigno@gmail.com
                  </a>
                </li>
                <li className=" flex flex-row justify-start items-center gap-1 text-left mx-auto w-[80%] max-w-[250px]">
                  <FaPhone className="w-4 h-4 mr-4 text-african-violet" />
                  <a
                    href="tel:+33 6 23 51 18 76"
                    className="hover:underline text-gray-400 cursor-pointer hover:text-pink-900"
                  >
                    +33 6 23 51 18 76
                  </a>
                </li>
                <li className=" flex flex-row justify-start items-center gap-1 text-left mx-auto w-[80%] max-w-[250px]">
                  <FaGithub className="w-4 h-4 mr-4 text-african-violet" />
                  <a
                    href="https://github.com/Karabaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-400 cursor-pointer hover:text-pink-900"
                  >
                    Karabaaa
                  </a>
                </li>
                <li className=" flex flex-row justify-start items-center gap-1 text-left mx-auto w-[80%] max-w-[250px]">
                  <FaHome className="w-4 h-4 mr-4 text-african-violet" />
                  <span className="text-gray-400">Paris</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

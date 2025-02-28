import { FaPhone, FaHome, FaEnvelope, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-african-violet text-white font-quicksand text-sm py-6">
      <div className=" mx-auto text-center">
        {/* Contact Info */}
        <ul className=" flex flex-col space-y-4 mx-auto">
          <li className=" flex flex-row justify-start items-center gap-1 w-[60%] max-w-[250px] text-left mx-auto overflow-visible">
            <FaEnvelope className="w-4 h-4 mr-4 text-white overflow-visible" />
            <a
              href="mailto:amandine.moigno@gmail.com"
              className="hover:underline"
            >
              amandine.moigno@gmail.com
            </a>
          </li>
          <li className=" flex flex-row justify-start items-center gap-1 w-[60%] max-w-[250px] text-left mx-auto">
            <FaPhone className="w-4 h-4 mr-4 text-white" />
            <a href="tel:+33 6 23 51 18 76" className="hover:underline">
              +33 6 23 51 18 76
            </a>
          </li>
          <li className=" flex flex-row justify-start items-center gap-1 w-[60%] max-w-[250px] text-left mx-auto">
            <FaGithub className="w-4 h-4 mr-4 text-white" />
            <a
              href="https://github.com/Karabaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Karabaaa
            </a>
          </li>
          <li className=" flex flex-row justify-start items-center gap-1 w-[60%] max-w-[250px] text-left mx-auto">
            <FaHome className="w-4 h-4 mr-4 text-white" />
            <span>Paris</span>
          </li>
        </ul>

        {/* Copyright */}
        <p className="mt-10 mb-2 text-aquamarine text-sm">
          Site codé par Amandine Moigno © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

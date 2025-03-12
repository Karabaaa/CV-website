import { FaPhone, FaHome, FaEnvelope, FaGithub } from "react-icons/fa"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-teal-800   relative text-white font-quicksand text-sm py-6 shadow-[0_-4px_6px_-3px_rgba(0,0,0,0.5)]">
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
        <p className="mt-10 mb-2 text-icterine text-sm">
          {t("footer.codedBy") + ` © ${currentYear}`}
        </p>
      </div>
    </footer>
  )
}

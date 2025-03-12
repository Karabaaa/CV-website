import { useTranslation } from "react-i18next"
import { useState } from "react"

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [selectedLang, setSelectedLang] = useState<string>("fr")
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setSelectedLang(lang)
  }

  return (
    <div className="font-quicksand">
      <button
        className={`cursor-pointer hover:underline ${
          selectedLang === "en" ? "font-bold" : ""
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <span>{" | "}</span>
      <button
        className={`cursor-pointer hover:underline ${
          selectedLang === "fr" ? "font-bold" : ""
        }`}
        onClick={() => changeLanguage("fr")}
      >
        FR
      </button>
    </div>
  )
}

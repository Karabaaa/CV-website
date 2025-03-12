import { useTranslation } from "react-i18next"

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="font-quicksand">
      <button
        className="cursor-pointer hover:underline"
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <span>{" | "}</span>
      <button
        className=" cursor-pointer hover:underline"
        onClick={() => changeLanguage("fr")}
      >
        FR
      </button>
    </div>
  )
}

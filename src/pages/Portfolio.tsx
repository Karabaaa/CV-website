import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const { t } = useTranslation()

  const images = [
    {
      src: "/assets/screen-lbc-1.png",
      alt: t("portfolio.alt1"),
      caption: t("portfolio.caption1"),
    },
    {
      src: "/assets/screen-lbc-2.png",
      alt: t("portfolio.alt2"),
      caption: t("portfolio.caption2"),
    },
    {
      src: "/assets/screen-lbc-3.png",
      alt: t("portfolio.alt3"),
      caption: t("portfolio.caption3"),
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section id="portfolio" className="bg-gray-100 p-10 place-items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-african-violet font-space-time-regular tracking-wider text-center my-16 block">
        Portfolio
      </h2>
      <div className="flex flex-col md:flex-row items-between gap-8 ">
        {/* Carrousel */}
        <div className="flex flex-col flex-1 items-center gap-4">
          <div className="flex items-center justify-center gap-4">
            {/* Bouton précédent */}
            <button
              onClick={handlePrev}
              className="bg-gray-800 text-white p-3 rounded-lg shadow-md  cursor-pointer hover:bg-gray-700"
            >
              ←
            </button>
            {/* Image */}
            <div className="w-[50%] flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 shadow-md">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="object-contain w-full h-auto"
              />
            </div>
            {/* Bouton suivant */}
            <button
              onClick={handleNext}
              className="bg-gray-800 text-white p-3 rounded-lg shadow-md cursor-pointer hover:bg-gray-700"
            >
              →
            </button>
          </div>
          {/* Légende */}
          <div className="text-center">
            <h3 className="text-lg font-medium">
              {images[currentIndex].caption}
            </h3>
          </div>
        </div>
        {/* Description */}
        <div className="flex-1 text-lg flex flex-col justify-start items-center text-center md:text-left mt-2">
          <h3 className="font-bold text-orange-600 text-3xl mb-8">LeBonCoin</h3>
          <p className="text-justify">{t("portfolio.projectDescription")}</p>
          <div className="my-10 text-center ">
            <span>{t("portfolio.clickHere")}</span>
            <a
              href="https://repliqueleboncoin.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer font-bold text-orange-700 underline"
            >
              {t("portfolio.linkText")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

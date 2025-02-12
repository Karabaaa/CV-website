import { useState } from "react"

const images = [
  {
    src: "/src/assets/screen-lbc-1.png",
    alt: "Première capture d'écran",
    caption: "modale connexion requise",
  },
  {
    src: "/src/assets/screen-lbc-2.png",
    alt: "Deuxième capture d'écran",
    caption: "bas de page, page 3",
  },
  {
    src: "/src/assets/screen-lbc-3.png",
    alt: "Troisième capture d'écran",
    caption: "page d'accueil",
  },
]

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

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
      <h2 className="text-4xl font-bold text-center my-16">Mon portfolio</h2>
      <div className="flex flex-col md:flex-row items-between gap-8 ">
        {/* Carrousel */}
        <div className="flex flex-col flex-1 items-center gap-4">
          <div className="flex items-center gap-4">
            {/* Bouton précédent */}
            <button
              onClick={handlePrev}
              className="bg-gray-800 text-white p-3 rounded-lg shadow-md hover:bg-gray-700"
            >
              ←
            </button>
            {/* Image */}
            <div className="w-f1/2 flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 shadow-md">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="object-contain w-full h-auto"
              />
            </div>
            {/* Bouton suivant */}
            <button
              onClick={handleNext}
              className="bg-gray-800 text-white p-3 rounded-lg shadow-md hover:bg-gray-700"
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
          <p className="text-justify">
            Voici un projet de réplique de LeBonCoin sur lequel j'ai travaillé
            deux mois en utilisant les technologies suivantes : React,
            Javascript, HTML, CSS, Bootstrap pour le rendre mobile responsive,
            Heroku pour mon serveur, Netlify pour le déploiement du site,
            MongoDB pour ma base de données, Cloudinary pour stocker les images,
            SendGrid pour l'envoi automatique d'email, Github pour la sauvegarde
            de mon code, Cohere AI pour mon chatbot, Stripe pour le paiement en
            ligne et Postman pour tester les routes backend.
          </p>
          <div className="my-10 text-center ">
            <span>Cliquez ici : </span>
            <a
              href="https://repliqueleboncoin.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer font-bold text-orange-700 underline"
            >
              Réplique LeBonCoin
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

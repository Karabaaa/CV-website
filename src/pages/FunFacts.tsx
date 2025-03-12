import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const FunFacts = () => {
  const { t } = useTranslation()
  const funFactsList: { category: string; funFact: string[] }[] = [
    {
      category: t("funfacts.categories.travel"),
      funFact: t("funfacts.facts.travel", { returnObjects: true }) as string[],
    },
    {
      category: t("funfacts.categories.sports"),
      funFact: t("funfacts.facts.sports", { returnObjects: true }) as string[],
    },
    {
      category: t("funfacts.categories.literature"),
      funFact: t("funfacts.facts.literature", {
        returnObjects: true,
      }) as string[],
    },
    {
      category: t("funfacts.categories.cinema"),
      funFact: t("funfacts.facts.cinema", { returnObjects: true }) as string[],
    },
    {
      category: t("funfacts.categories.music"),
      funFact: t("funfacts.facts.music", { returnObjects: true }) as string[],
    },
  ]

  const [selectedFunFact, setSelectedFunFact] = useState<{
    category: string
    funFact: string[]
  } | null>(null)
  const [rotationAngle, setRotationAngle] = useState<number>(0)
  const [isSpinning, setIsSpinning] = useState<boolean>(false)

  // UseEffect pour activer le bouton après l'animation
  useEffect(() => {
    if (!isSpinning) {
      // Assure que le bouton devient réactif après l'animation
      console.log("Animation terminée, bouton réactivé.")
    }
  }, [isSpinning])

  const handleSpin = () => {
    if (isSpinning) {
      console.log("La roue est déjà en train de tourner.")
      return
    }
    console.log("Début du spin...")
    setIsSpinning(true)

    const randomIndex = Math.floor(Math.random() * funFactsList.length)
    console.log("Index choisi:", randomIndex)

    const sliceAngle = 360 / funFactsList.length // Angle par segment
    const targetAngle = sliceAngle * randomIndex // Angle cible pour l'index
    const spins = 2 // Nombre de tours complets

    // Calcul de l'angle final
    const finalAngle = spins * 360 + (360 - (rotationAngle % 360)) + targetAngle
    console.log("Angle cible:", targetAngle, "Angle final:", finalAngle)

    // Lancement de l'animation
    setRotationAngle(finalAngle)

    setTimeout(() => {
      console.log("Animation terminée. Calcul de la catégorie visible...")

      // Détermine quel segment est aligné avec le curseur après le spin
      const adjustedAngle = finalAngle % 360 // Angle après normalisation
      const visibleIndex = Math.floor(
        ((360 - adjustedAngle + sliceAngle / 2) % 360) / sliceAngle
      )
      console.log("Index visible:", visibleIndex)

      setSelectedFunFact(funFactsList[visibleIndex])
      setIsSpinning(false)
      console.log("Animation terminée. Affichage du fait amusant.")
    }, 3000) // Temps de l'animation
  }

  return (
    <section
      id="funfacts"
      className="p-10 text-center flex flex-col items-center mx-auto text-white"
    >
      <div className="background-container"></div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-starjedi tracking-wider text-center my-16 block">
        {t("funfacts.title")}
      </h2>
      {/* Bouton pour tourner */}
      <motion.button
        onClick={handleSpin}
        disabled={isSpinning}
        className="relative inline-block px-6 py-3 mt-6 mb-6 text-lg md:text-xl font-bold text-white uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full cursor-pointer transition-transform transform hover:scale-110 focus:outline-none"
        whileHover={{ scale: 1.1 }}
      >
        <span className="absolute inset-0 border-4 border-white rounded-full animate-pulse"></span>
        <span className="relative z-10 font-oswald">
          {t("funfacts.spin_button")}
        </span>
      </motion.button>
      <div className="relative w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] lg:w-[40vw] lg:h-[40vw] mx-auto ">
        {/* Curseur fixe */}
        <div
          className="absolute z-2 cursor-small"
          style={{
            top: "50%", // Centre verticalement
            right: "0%", // Colle au bord droit
            transform: "translateY(-70%)", // Ajuste pour que le milieu du curseur corresponde au centre vertical
          }}
        >
          <svg
            className="cursor-small"
            width="39"
            height="31"
            viewBox="0 0 39 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.418 16.5674L2.25643 29.6797L27.2143 1.65525L37.418 16.5674Z"
              fill="white"
              stroke="black"
            />
          </svg>
        </div>

        {/* Roue */}
        <motion.div
          className=" absolute w-full h-full flex justify-center items-center"
          animate={{ rotate: rotationAngle }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <svg
            width="90%"
            height="90%"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="250" fill="white" stroke="black" />
            <line x1="250" y1="250" x2="172" y2="12.3904" stroke="black" />
            <line x1="250" y1="250" x2="451.96" y2="102.649" stroke="black" />
            <line x1="250" y1="250" x2="452.548" y2="396.542" stroke="black" />
            <line x1="250" y1="250" x2="173.221" y2="487.919" stroke="black" />
            <line y1="250" x2="250" y2="250" stroke="black" />
          </svg>

          {funFactsList.map((item, index) => {
            const angle = (360 / funFactsList.length) * index

            return (
              <div
                key={item.category}
                className="absolute text-center 
              text-base md:text-xl font orbitron font-semibold"
                style={{
                  transform:
                    window.innerWidth >= 640 // Vérifie si l'écran est `sm` ou plus large
                      ? `rotate(${angle}deg) translateX(100px)`
                      : `rotate(${angle}deg) translateX(70px)`,
                  transformOrigin: "center",
                  top: "50%",
                  left: "50%",
                  width: "150px",
                  height: "50px",
                  marginLeft: "-70px",
                  marginTop: "-20px",

                  color: "black",
                  lineHeight: "40px",
                }}
              >
                {item.category}
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Affichage du fun fact */}
      {selectedFunFact && (
        <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500  mx-12 mb-6 p-6 rounded-lg shadow-lg border-4 border-white mt-6 max-w-[80%]">
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl text-white uppercase font-1up mb-4">
              {selectedFunFact.category}
            </h3>
            <p className="sm:text-md  md:text-lg font-quicksand text-white ">
              {
                selectedFunFact.funFact[
                  Math.floor(Math.random() * selectedFunFact.funFact.length)
                ]
              }
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default FunFacts

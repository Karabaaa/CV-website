import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Liste des fun facts
const funFactsList = [
  {
    category: "Voyage",
    funFact: [
      "J'ai fait le tour du globe en partant à l'Ouest, plus pratique pour le décalage horaire !",
      "J'ai été fille au pair à Florence.",
      "J'ai fait un stage de permaculture en Grèce.",
      "Je suis partie à 14 ans au Canada pour apprendre l'anglais en échange linguistique et je suis repartie à 17 ans pour y étudier.",
      "J'adore l'art de vivre à la japonaise.",
      "Je suis tombée malade au Liban car la nourriture était trop bonne, j'ai pas su me retenir.",
    ],
  },
  {
    category: "Sport",
    funFact: [
      "J'ai appris à surfer et j'ai décroché mon niveau 1 de plongée à Tahiti.",
      "Je me suis inscrite pour courir un marathon fin avril !",
      "J'ai suivi des cours de tennis pendant 9 ans.",
      "Je suis tombée en amour de l'escrime lors de mon échange universitaire à Lancaster en Angleterre.",
    ],
  },
  {
    category: "Littérature",
    funFact: [
      "Mon auteur préféré : Romain Gary",
      `La BD qui a bercée ma jeunesse : "Lanfeust de Troy"`,
      `J'adore la science-fiction, j'ai lu notamment le "Cycle des robots" et "Fondation" de Isaac Asimov et j'ai lu la trilogie "Dune" de Frank Herbert`,
      `Un de mes romans préférés est "Giovanni's room" de James Baldwin.`,
    ],
  },
  {
    category: "Cinéma",
    funFact: [
      "Quand j'étais petite j'étais fan de Audrey Hepburn et j'adorais regarder les films de Hitchcock.",
      `Trois films qui m'ont marquées : "Pororoca" de Constantin Popescu, "So long, my son" de Wang Xiaoshuai et "Un grand voyage vers la nuit" de Bi Gan `,
      "Je suis fan de Denis Villeneuve pour son génie du grandiose.",
      "Je suis fan de Stanley Kubrick pour sa mise en scène.",
      "Je suis fan de Paolo Sorrentino et de Eric Rhomer pour leur réflexions existentielles.",
      "J'adore le cinéma de Yorgos Lanthimos et de Ruben Östlund pour ce qu'il révèle sur les paradoxes et la noirceur chez l'humain.",
      "J'adore Ken Loach pour son humanisme.",
      "Je suis tombée amoureuse du cinéma contemplatif de Kiarostami.",
    ],
  },
  {
    category: "Musique",
    funFact: [
      "Grâce au covid, je me suis mise à apprendre à jouer du piano.",
      "Je suis allée voir Charlotte Cardin et James Blake en concert dernièrement.",
      `Mon dernier coup de coeur musical, le groupe allemand "Oehl".`,
    ],
  },
]

const FunFacts = () => {
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
      className="px-auto text-center flex flex-col items-center mx-auto bg-gray-800 text-white"
    >
      <h2 className="text-4xl font-bold my-16 px-4">
        Voici des fun facts sur moi
      </h2>

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
                className="absolute text-centertext-base md:text-xl font-semibold"
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

      {/* Bouton pour tourner */}
      <motion.button
        onClick={handleSpin}
        disabled={isSpinning}
        className="mt-6 bg-blue-500 text-white py-2 px-4 mb-6 rounded cursor-pointer transition-transform transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
      >
        Tournez la roue !
      </motion.button>

      {/* Affichage du fun fact */}
      {selectedFunFact && (
        <div className="passion-detail bg-white mx-12 mb-16 p-6 rounded-lg shadow-lg border-gray-800">
          <h3 className="text-lg font-bold">{selectedFunFact.category}</h3>
          <p className="text-md">
            {
              selectedFunFact.funFact[
                Math.floor(Math.random() * selectedFunFact.funFact.length)
              ]
            }
          </p>
        </div>
      )}
    </section>
  )
}

export default FunFacts

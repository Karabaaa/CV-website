import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { useTranslation } from "react-i18next"
import FormationCard from "../components/FormationCard"

type EducationRecord = {
  year: string
  diploma: string
  major: string
  school: string
}

export default function Timeline() {
  const { t } = useTranslation()
  const data: EducationRecord[] = t("timeline.data", {
    returnObjects: true,
  }) as EducationRecord[]

  const [selected, setSelected] = useState<number | null>(null)
  const spaceshipRef = useRef<HTMLDivElement>(null)
  const spaceship2Ref = useRef<HTMLDivElement>(null) // Nouvelle référence pour spaceship2
  const cardRef = useRef<HTMLDivElement>(null) // Référence pour la FormationCard

  useEffect(() => {
    if (spaceshipRef.current) {
      gsap.fromTo(
        spaceshipRef.current,
        { x: "-10%", y: "0%", scale: 0.8, opacity: 1, rotation: 45 }, // Point de départ
        {
          x: "50vw", // Destination horizontale
          y: "120vh", // Destination verticale (diagonale descendante)
          scale: 1, // Taille finale
          opacity: 1, // Maintient la visibilité
          rotation: 45,
          duration: 5, // Durée augmentée pour un mouvement plus lent
          repeat: -1, // Animation infinie
          ease: "power1.inOut",
        }
      )
    }
    if (spaceship2Ref.current) {
      gsap.fromTo(
        spaceship2Ref.current,
        { x: "-180%", y: "130vh", scale: 0.8, opacity: 1, rotation: 45 }, // Point de départ (en bas à gauche)
        {
          x: "90vw", // Destination horizontale (vers la droite)
          y: "-100vh", // Destination verticale (vers le haut)
          scale: 1, // Taille finale
          opacity: 1, // Maintient la visibilité
          duration: 12, // Durée
          ease: "power1.inOut",
          repeat: -1, // Animation infinie
        }
      )
    }
  }, [])

  useEffect(() => {
    if (selected !== null && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth", // Animation fluide
        block: "center", // Centre l'élément dans la vue
      })
    }
  }, [selected])

  // IDs des patterns correspondant aux planètes
  const patternIds = [
    "earth-pattern",
    "moon-pattern",
    "mars-pattern",
    "jupiter-pattern",
  ]

  return (
    <section
      id="formations"
      className="flex flex-col justify-center items-center timeline-section p-10 cursor-crosshair "
    >
      <div className="background-container"></div>
      <div className="spaceship-container z-3" ref={spaceshipRef}>
        <img
          src="/assets/spaceship.png"
          alt="Spaceship"
          className="relative top-0 left-0 w-20 h-20"
        />
      </div>
      {/* Deuxième vaisseau spatial avec animation différente */}
      <div className="spaceship-container z-3" ref={spaceship2Ref}>
        <img
          src="/assets/spaceship2.png"
          alt="Spaceship"
          className="relative top-0 left-0 w-12 h-12"
        />
      </div>
      <div className=" w-full h-auto sm:max-w-fit z-3 relative planets-container">
        {/* Contenu de la timeline */}
        <div className="flex flex-col items-center gap-8 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-starjedi tracking-widest text-center my-16 block ">
            {t("timeline.title")}
          </h2>
          {/* FormationCard Modal */}
          {selected !== null && (
            <div ref={cardRef}>
              <FormationCard
                year={data[selected].year}
                diploma={data[selected].diploma}
                major={data[selected].major}
                school={data[selected].school}
                onClose={() => setSelected(null)}
              />
            </div>
          )}

          <div className=" timeline-svg w-full h-auto">
            <svg
              className="w-full h-auto"
              viewBox="-10 -10 1125 400"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Courbe */}
              <motion.path
                d="M1 230C239.4 150 221 154 279 230C337 306 542.208 391.676 629 284C686.482 212.686 615 144 645 50C675 -44 1005 26 1005 26"
                stroke="white"
                animate={{ pathLength: [0, 1] }} // Débute l'animation du début à la fin
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              {/* Définition du motif */}
              <defs>
                <pattern
                  id="earth-pattern"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  patternUnits="objectBoundingBox"
                >
                  <image
                    href="/assets/Earth.jpg"
                    x="0"
                    y="0"
                    width="50"
                    height="50"
                  />
                </pattern>
                <pattern
                  id="moon-pattern"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  patternUnits="objectBoundingBox"
                >
                  <image
                    href="/assets/lune.jpg"
                    x="-11"
                    y="-11"
                    width="71"
                    height="71"
                  />
                </pattern>
                <pattern
                  id="mars-pattern"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  patternUnits="objectBoundingBox"
                >
                  <image
                    href="/assets/Mars.png"
                    x="0"
                    y="0"
                    width="50"
                    height="50"
                  />
                </pattern>
                <pattern
                  id="jupiter-pattern"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  patternUnits="objectBoundingBox"
                >
                  <image
                    href="/assets/Jupiter.png"
                    x="-1"
                    y="-1"
                    width="51"
                    height="51"
                  />
                </pattern>
              </defs>

              {/* Points */}
              {data.map((item, index) => {
                const positions = [
                  { cx: 224, cy: 175 },
                  { cx: 430, cy: 319 },
                  { cx: 638, cy: 97 },
                  { cx: 1018, cy: 35 },
                ]
                const { cx, cy } = positions[index]

                const fillPattern = `url(#${patternIds[index]})`

                return (
                  <g key={index}>
                    {/* Cercle */}
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r="25"
                      fill={fillPattern}
                      stroke={index === 1 ? "#333" : "none"}
                      strokeWidth={index === 1 ? "2" : "0"}
                      whileHover={{ scale: 1.2 }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                      }}
                      onClick={() => setSelected(index)}
                      className="cursor-pointer"
                    />

                    {/* Texte dans le cercle */}
                    <text
                      x={cx + -70} // Décale le texte à gauche du cercle
                      y={cy + 50}
                      textAnchor="start" // Aligne le texte à gauche
                      fontSize="20px"
                      fill="white"
                      fontWeight="bold"
                      fontFamily="Orbitron"
                    >
                      {item.year}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

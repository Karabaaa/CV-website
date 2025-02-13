import { useState } from "react"
import { motion } from "framer-motion"
import { adjustCardPosition } from "../utils/positioningCard"
import FormationCard from "../components/FormationCard"

const data = [
  {
    year: "2012",
    diploma: "Baccalauréat scientifique",
    major: "Mention Bien, Spécialité S",
    school: "Lycée Descartes, France (78)",
  },
  {
    year: "2016",
    diploma: "Bachelor of Business Administration",
    major: "Marketing et Économie appliquée",
    school: "HEC Montréal, Canada",
  },
  {
    year: "2019",
    diploma: "Master en Ingénierie Culturelle et Management",
    school: "ICART, Paris - France",
  },
  {
    year: "2024",
    diploma: "Formation autodidacte en JS, HTML, CSS, React, TypeScript",
    school: "YouTube, FreeCodeCamp, LeReacteur",
  },
]

export default function Timeline() {
  const [selected, setSelected] = useState<number | null>(null)
  const [circlePosition, setCirclePosition] = useState<{
    cx: number
    cy: number
  } | null>(null)

  // IDs des patterns correspondant aux planètes
  const patternIds = [
    "earth-pattern",
    "moon-pattern",
    "mars-pattern",
    "jupiter-pattern",
  ]

  const handleCircleClick = (cx: number, cy: number, index: number) => {
    const cardWidth = 300 // Largeur de la carte définie dans FormationCard
    const cardHeight = 200 // Hauteur approximative de la carte
    const windowWidth = window.innerWidth // Largeur de la fenêtre
    const windowHeight = window.innerHeight // Hauteur de la fenêtre
    const padding = 20 // Marge autour des bords

    // Utilise la fonction utilitaire pour ajuster la position
    const { x, y } = adjustCardPosition(
      cx,
      cy,
      cardWidth,
      cardHeight,
      windowWidth,
      windowHeight,
      padding
    )

    setCirclePosition({ cx: x, cy: y })
    setSelected(index)
  }

  return (
    <section
      id="formations"
      className="flex flex-col justify-center items-center timeline-section p-10 "
    >
      <div className="background-container"></div>
      <div className=" w-full h-auto sm:max-w-fit z-3 relative planets-container">
        {/* Contenu de la timeline */}

        <h2 className="text-4xl font-bold text-white text-center my-16 block ">
          Formations
        </h2>

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
              transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
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
                    onClick={() => handleCircleClick(cx, cy, index)}
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
                  >
                    {item.year}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>
      </div>

      {/* FormationCard Modal */}
      {selected !== null && circlePosition && (
        <FormationCard
          year={data[selected].year}
          diploma={data[selected].diploma}
          major={data[selected].major}
          school={data[selected].school}
          onClose={() => setSelected(null)}
          cx={circlePosition.cx}
          cy={circlePosition.cy}
        />
      )}
    </section>
  )
}

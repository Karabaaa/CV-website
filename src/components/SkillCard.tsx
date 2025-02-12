import { motion } from "framer-motion"
import { useState } from "react"

interface SkillCardProps {
  frontImage: string
  backImage: string
  skill: string
  category: string
  position: { x: string; y: string }
  size: { width: string; height: string }
}

const categoryColors: Record<string, string> = {
  "Compétences Techniques": "#1E90FF", // Bleu
  "Compétences Humaines": "#FF6347", // Rouge
  "Compétences Organisationnelles": "#32CD32", // Vert
}

export default function SkillCard({
  frontImage,
  backImage,
  skill,
  category,
  position,
  size,
}: SkillCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="relative w-32 h-32 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-36
      xl:h-36
      perspective-1000  "
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className={`absolute inset-0 rounded-lg shadow-lg  transform transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        } `}
      >
        {/* Face avant : partie spécifique de l'image principale */}
        {!flipped && (
          <div
            className="w-full h-full bg-cover bg-no-repeat rounded-lg border-gray-800 border-1 "
            style={{
              backgroundImage: `url(${frontImage})`,
              backgroundPosition: `${position.x} ${position.y}`,
              backgroundSize: `${size.width} ${size.height}`,
            }}
          />
        )}

        {/* Face arrière : compétence et image */}
        {flipped && (
          <div
            className="w-full h-full bg-cover bg-no-repeat rounded-lg border-gray-800 border-1 rotate-y-180 flex items-end justify-center"
            style={{
              backgroundImage: `url(${backImage})`,
            }}
          >
            <span
              className="text-center uppercase font-bold"
              style={{
                fontFamily: "Garamond",
                fontSize: "0.8rem",
                color: categoryColors[category] || "#333",
              }}
            >
              {skill}
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

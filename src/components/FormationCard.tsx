import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface FormationCardProps {
  year: string
  diploma: string
  major?: string
  school: string
  onClose: () => void
  cx: number
  cy: number
}

export default function FormationCard({
  year,
  diploma,
  major,
  school,
  onClose,
  cx,
  cy,
}: FormationCardProps) {
  const [adjustedPosition, setAdjustedPosition] = useState({ x: cx, y: cy })

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      if (windowWidth <= 640) {
        // Si l'écran est "small", on centre la carte
        setAdjustedPosition({
          x: windowWidth / 2 - 140,
          y: windowHeight / 2,
        })
      } else {
        // Sinon, on ajuste en fonction de cx et cy
        setAdjustedPosition({ x: cx - 150, y: cy - 80 })
      }
    }

    handleResize() // Ajuste la position lors du premier rendu
    window.addEventListener("resize", handleResize) // Écoute les changements de taille

    return () => {
      window.removeEventListener("resize", handleResize) // Nettoyage
    }
  }, [cx, cy])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute bg-white p-4 rounded-lg shadow-lg z-3"
      style={{
        width: "270px",
        top: `${adjustedPosition.y}px`, // Utilise la position ajustée
        left: `${adjustedPosition.x}px`, // Utilise la position ajustée
        transform: "translate(-50%, -50%)",
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-500 hover:text-black"
      >
        ✕
      </button>
      <h3 className="text-lg font-bold">{year}</h3>
      <p className="text-base text-gray-700">{diploma}</p>
      {major && <p className="text-sm text-gray-500">{major}</p>}
      <p className="text-sm text-gray-600">{school}</p>
    </motion.div>
  )
}

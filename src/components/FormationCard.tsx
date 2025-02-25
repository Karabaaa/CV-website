import { motion } from "framer-motion"

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
  return (
    <div className="formation-card-mobile">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="absolute bg-white p-4 rounded-lg shadow-lg z-3"
        style={{
          width: "300px",
          top: cx - 150,
          left: cy - 150,
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
    </div>
  )
}

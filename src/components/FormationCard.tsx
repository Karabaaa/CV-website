import { motion } from "framer-motion"

interface FormationCardProps {
  year: string
  diploma: string
  major?: string
  school: string
  onClose: () => void
}

export default function FormationCard({
  year,
  diploma,
  major,
  school,
  onClose,
}: FormationCardProps) {
  return (
    <div className="absolute z-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative p-4 bg-asfalt rounded-lg max-w-full border-3d"
        style={{
          width: "90%", // Par défaut, la modale prend 90% de la largeur
          maxWidth: "400px", // Largeur maximale sur les écrans plus grands
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-700 text-xl font-pixel cursor-pointer"
        >
          ✕
        </button>
        <h3 className="text-3xl font-1up text-aquamarine mb-4 border-b-2 border-aquamarine pb-2">
          {year}
        </h3>
        <p className="text-lg font-led text-white mb-2">{diploma}</p>
        {major && (
          <p className="text-md font-orbitron text-white mb-2">{major}</p>
        )}
        <p className="text-md font-oswald text-oxford-blue mb-2">{school}</p>
      </motion.div>
    </div>
  )
}

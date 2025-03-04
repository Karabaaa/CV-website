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
    <div className="relative z-3 mb-4 h-full p-auto block place-items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative p-4 bg-asfalt rounded-lg border-3d
       w-auto max-w-[90%] lg:max-w-xl xl:max-w-2xl h-auto max-h-[90%]"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-700 text-xl font-pixel cursor-pointer"
        >
          ✕
        </button>
        <h3 className="text-3xl md:text-4xl xl:text-5xl font-1up text-aquamarine mb-4 border-b-2 border-aquamarine pb-2">
          {year}
        </h3>
        <p className="text-lg md:text-xl xl:text-2xl  font-led text-white mb-2">
          {diploma}
        </p>
        {major && (
          <p className="text-md md:text-lg xl:text-xl font-orbitron text-white mb-2">
            {major}
          </p>
        )}
        <p className="text-md md:text-lg xl:text-xl font-oswald text-oxford-blue mb-2">
          {school}
        </p>
      </motion.div>
    </div>
  )
}

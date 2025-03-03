import { motion } from "framer-motion"

interface ExperienceCardProps {
  year: string
  job: string
  company: string
  city: string
  missions: string
  image: string
  onClose: () => void
}

export default function ExperienceCard({
  year,
  job,
  company,
  city,
  missions,
  image,
  onClose,
}: ExperienceCardProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4 min-h-screen overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative bg-white rounded-lg shadow-lg m-auto p-4 md:p-8 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-[90vw] max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 cursor-pointer text-2xl focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Fermer la modale"
        >
          ✕
        </button>
        <div className="flex flex-col items-center gap-4">
          <img
            src={image}
            alt={company}
            className="object-cover rounded-md h-auto max-w-md w-40 sm:w-48"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center">{`${year} - ${company}`}</h3>
          <span className="text-sm sm:text-base md:text-lg text-gray-600 italic">
            <i>{city}</i>
          </span>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 font-bold text-center">
            {job}
          </p>
          <p className="text-sm sm:text-base text-gray-500 px-4 text-justify pb-5">
            {missions}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

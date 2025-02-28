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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative bg-white rounded-lg shadow-lg max-w-full w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 p-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 cursor-pointer"
        >
          ✕
        </button>
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={company}
            className="object-cover rounded-md w-auto h-48 mb-4"
          />
          <h3 className="text-2xl font-bold text-center">{`${year} - ${company}`}</h3>
          <span className="text-lg text-gray-600 italic">
            <i>{city}</i>
          </span>
          <p className="text-xl text-gray-800 font-bold my-4 text-center">
            {job}
          </p>
          <p className="text-lg text-gray-500 px-4 text-justify pb-5">
            {missions}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

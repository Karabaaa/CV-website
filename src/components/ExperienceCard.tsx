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
    <div className="fixed inset-0 flex items-center justify-center z-51 m-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="absolute bg-white p-5 rounded-lg shadow-lg z-51 h-auto m-auto "
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <div className="place-items-center">
          <img
            src={image}
            alt={company}
            className="object-cover rounded-md scale-75 "
          />
          <h3 className="text-lg font-bold">{`${year} - ${company}`}</h3>
          <span className="my-15">
            <i>{city}</i>
          </span>
          <p className="text-md text-gray-800 font-bold my-5 text-center">
            {job}
          </p>
          <p className="text-sm text-gray-500 px-5 text-justify pb-5">
            {missions}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

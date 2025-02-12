import { motion } from "framer-motion"
import photo from "../assets/photo.png"

export default function Intro() {
  return (
    <motion.section
      id="home"
      className="text-center p-10 mt-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={photo}
        alt="photo Amandine Moigno"
        className="w-60 h-60 rounded-full mx-auto mb-4 object-cover"
      />
      <h1 className="text-4xl font-bold">Amandine Moigno</h1>
      <p className="mt-4 text-lg">Web Developer</p>
    </motion.section>
  )
}

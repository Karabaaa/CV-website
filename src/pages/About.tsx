import { motion } from "framer-motion"
import { useState } from "react"
import ContactButton from "../components/ContactButton"
import { useTranslation } from "react-i18next"

const colors = [
  "bg-gradient-to-t from-gray-900/50 via-cyan-900 to-cyan-800", // Carré 1

  "bg-gradient-to-t from-gray-900/50 via-teal-900 to-teal-800", // Carré 2

  "bg-gradient-to-t from-gray-900/50 via-amber-500 to-amber-400", // Carré 3

  "bg-gradient-to-t from-gray-900/50 via-red-900 to-orange-800", // Carré 4
]

export default function About() {
  const { t } = useTranslation()
  const content = t("about.content", { returnObjects: true }) as any[] // Retourne un tableau d'objets

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <motion.section
      id="about"
      className="p-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-starjedi tracking-wider text-center my-16 block">
        {t("about.title")}
      </h2>
      <div className=" px-6 pb-12 flex items-center justify-center md:hidden ">
        <ContactButton />
      </div>
      <div
        className={`grid gap-6 ${
          activeIndex === null
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {content.map((item, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl cursor-pointer text-white shadow-[0px_2px_10px_rgba(0,0,0,0.5)] ${
              colors[index]
            } ${
              activeIndex === index
                ? "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4"
                : ""
            }`}
            layout
            onClick={() => handleToggle(index)}
            initial={{ borderRadius: "1rem" }}
            animate={{
              borderRadius: activeIndex === index ? "0.5rem" : "1rem",
            }}
          >
            <h3 className="text-xl font-orbitron font-bold">{item.title}</h3>
            {activeIndex === index && (
              <motion.p
                className="mt-4 text-sm font-quicksand md:text-base text-shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.text}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

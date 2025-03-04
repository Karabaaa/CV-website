import { motion } from "framer-motion"
import { useState } from "react"
import ContactButton from "../components/ContactButton"

const content = [
  {
    title: "Introduction",
    text: "Je m'appelle Amandine, j'ai tout juste 30 ans, et depuis 2024, j’ai entamé une reconversion en tant que développeuse web. Mon parcours atypique m’a menée à explorer divers domaines dans la culture et le cinéma avant de découvrir ma passion pour le web et les nouvelles technologies.",
  },
  {
    title: "Parcours académique",
    text: "J’ai obtenu un Bachelor en Business Administration à HEC Montréal en 2016, suivi d’un Master en Ingénierie Culturelle et Management à l’ICART Paris en 2019. Ces formations m’ont permis d’acquérir de solides compétences en gestion de projet et de débuter ma carrière dans l’industrie du cinéma. J’ai travaillé dans des entreprises variées, touchant à la production, l’exploitation de films, les ventes internationales et la location de matériel de tournage.",
  },
  {
    title: "Réinvention professionnelle",
    text: "Après avoir exploré l’industrie cinématographique sous divers angles, j’ai ressenti le besoin de me réinventer. Attirée par le monde du web, j’ai décidé d’apprendre à coder en autodidacte tout en m’entourant de développeurs expérimentés. Cette démarche me permet de tirer parti des nombreuses ressources gratuites disponibles en ligne, tout en cultivant ma volonté d'apprendre par moi-même.",
  },
  {
    title: "Objectifs 2025",
    text: "2024 a marqué une année de transformation, guidée par la persévérance, la discipline et la régularité. J’ai développé des compétences en JavaScript, HTML, CSS, TypeScript, React, Node.js, Bootstrap, Tailwind, Vite, Stripe, SendGrid, Postman, Cloudinary, MongoDB, Heroku, Figma, Netlify et GitHub. En 2025, mon objectif est de décrocher mon premier contrat en tant que développeuse web. Pour aller plus loin, je me suis également lancé le défi de courir un marathon en avril. Déterminée et motivée, je m’engage pleinement à devenir une développeuse web accomplie.",
  },
]

const colors = [
  "bg-gradient-to-t from-gray-900/50 via-cyan-900 to-cyan-800", // Carré 1

  "bg-gradient-to-t from-gray-900/50 via-teal-900 to-teal-800", // Carré 2

  "bg-gradient-to-t from-gray-900/50 via-amber-500 to-amber-400", // Carré 3

  "bg-gradient-to-t from-gray-900/50 via-red-900 to-orange-800", // Carré 4
]

export default function About() {
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
        À propos de moi
      </h2>
      <div className=" px-6 pb-12 flex items-center justify-center sm:hidden ">
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

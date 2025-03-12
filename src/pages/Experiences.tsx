import { useState } from "react"
import { useTranslation } from "react-i18next"
import ExperienceCard from "../components/ExperienceCard"

// Définition du type pour les données d'une expérience
interface Experience {
  year: string
  job: string
  company: string
  city: string
  missions: string
  image: string
}

export default function Experiences() {
  const { t } = useTranslation()
  // Le type de `data` est défini comme un tableau d'objets `Experience`
  const data: Experience[] = t("experiences.list", {
    returnObjects: true,
  }) as Experience[]
  const title: string = t("experiences.title") // Titre de la section

  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="experiences" className="bg-gray-100 p-10">
      <h2 className="text-2xl sm:text-4xl md:text-5xl  text-african-violet font-space-time-regular tracking-wider text-center my-8 sm:my-16 ">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((experience, index: number) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition"
          >
            <img
              src={experience.image}
              alt={experience.company}
              className="w-full h-full object-cover"
              onClick={() => setSelected(index)}
            />
          </div>
        ))}
      </div>
      {/* ExperienceCard Modal */}
      {selected !== null && (
        <ExperienceCard
          year={data[selected].year}
          job={data[selected].job}
          company={data[selected].company}
          city={data[selected].city}
          missions={data[selected].missions}
          image={data[selected].image}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}

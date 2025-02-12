import { useState } from "react"
import ExperienceCard from "../components/ExperienceCard"

const data = [
  {
    year: "2021-2023",
    job: "Chargée de projets",
    company: "PANAVISION",
    city: "Aubervilliers",
    missions:
      "Communication avec les directeurs de production et équipes techniques. Négociation des devis de location du matériel et saisie dans le CRM. Suivi des projets et de la logistique du matériel en assurant un service client continu.",
    image: `src/assets/PANAVISION.jpeg`,
  },
  {
    year: "2020-2021",
    job: "Chargée de communication",
    company: "CINÉMA ELDORADO",
    city: "Dijon",
    missions: `Community management. Édition du programme des films à l’affiche. Accueil des spectateurs, gestion de la caisse et du lieu de vie. Organisation d’événements (festival Télérama, fête de l’Eldo, séances spéciales).`,
    image: `src/assets/CINEMA-ELDORADO.jpg`,
  },
  {
    year: "2019",
    job: "Assistante de production",
    company: "UMEDIA",
    city: "Bruxelles",
    missions:
      "Constitution de dossiers de financement. Analyse des opportunités de coproduction. Suivi opérationnel des films.",
    image: `src/assets/UMEDIA.png`,
  },
  {
    year: "2019",
    job: "Coordinatrice logistique pour le marché du film du festival de Cannes",
    company: "FESTIVAL DE CANNES",
    city: "Cannes",
    missions:
      "Accueil des intervenants et coordination des conférences organisées.",
    image: `src/assets/CANNES.jpg`,
  },
  {
    year: "2018",
    job: "Coordinatrice logistique de la Ryder Cup 2018",
    company: "RYDER CUP",
    city: "Guyancourt",
    missions: `Transmission et coordination de l’information entre prestataires et l’organisation. Actions pour la prévention et la protection du public et des employés sur site.`,
    image: `src/assets/RYDER-CUP.jpeg`,
  },
  {
    year: "2018",
    job: "Assistante en ventes internationales",
    company: "WIDE",
    city: "Paris",
    missions:
      "Prospection et soumission de films aux festivals. Négociation des tarifs de projection aux festivals et aux exploitants. Gestion du matériel audiovisuel, press kit, line-up et visuels à envoyer.",
    image: `src/assets/WIDE.jpg`,
  },
  {
    year: "2016-2017",
    job: "Assistante chef de projet événementiel",
    company: "XLA VOYAGES",
    city: "Boulogne-Billancourt",
    missions:
      "Conception, organisation et suivi de projets événementiels. Prospection, contact et négociation avec les prestataires.",
    image: `src/assets/XLA.jpg`,
  },
]

export default function Experiences() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="experiences" className="bg-gray-100 p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center my-16 mx-0 px-4">
        Expériences professionnelles
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((_, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition"
          >
            <img
              src={data[index].image}
              alt={data[index].company}
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

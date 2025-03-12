import SkillCard from "../components/SkillCard"
import { useEffect } from "react"
import { gsap } from "gsap"
import { useTranslation } from "react-i18next"

type SkillData = {
  category: string
  image: string
  skills: string[] // Toujours un tableau de chaînes
}

export default function Skills() {
  const { t } = useTranslation()

  const data: SkillData[] = [
    {
      category: "Compétences Techniques",
      image: "/assets/technical-skill-card.png",
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
        "React",
        "Node.js",
        "VS Code",
        "Git",
        "Cloudinary",
        "Vite",
        "Heroku",
        "MongoDB",
        "Netlify",
        "Trello, Slack",
        "SendGrid",
        "Postman",
      ],
    },
    {
      category: "Compétences Humaines",
      image: "/assets/human-skill-card.png",
      skills: t("skills.human.skillsList", { returnObjects: true }) as string[],
    },
    {
      category: "Compétences Organisationnelles",
      image: "/assets/organisation-skill-card.png",
      skills: t("skills.organizational.skillsList", {
        returnObjects: true,
      }) as string[],
    },
  ]

  // Fusionner toutes les compétences dans un seul tableau
  const allSkills = data.flatMap(({ image, skills, category }) =>
    skills.map((skill) => ({ skill, image, category }))
  )

  // Mélanger les compétences de manière aléatoire
  const shuffledSkills = allSkills.sort(() => Math.random() - 0.5)

  // Image principale et backImages
  const frontImage = "/assets/dungeon.png" // L'image principale

  // Dimensions de la grille
  const rows = 6
  const cols = 5
  const cellWidth: string = `${100 / cols}%`
  const cellHeight: string = `${100 / rows}%`

  // Générer les positions pour découper l'image
  const positions: { x: string; y: string }[] = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      positions.push({
        x: `${(col / (cols - 1)) * 100}%`,
        y: `${(row / (rows - 1)) * 100}%`,
      })
    }
  }

  // Positions et orientations des empreintes définies manuellement
  const customCatFootprints = [
    { left: "10%", top: "50%", rotation: 50 },
    { left: "15%", top: "45%", rotation: 20 },
    { left: "25%", top: "45%", rotation: 70 },
    { left: "35%", top: "45%", rotation: 75 },
    { left: "45%", top: "50%", rotation: 80 },
    { left: "55%", top: "48%", rotation: 40 },
    { left: "65%", top: "45%", rotation: 20 },
    { left: "70%", top: "40%", rotation: -20 },
    { left: "68%", top: "35%", rotation: -30 },
    { left: "65%", top: "30%", rotation: -20 },
    { left: "65%", top: "25%", rotation: 10 },
    { left: "70%", top: "20%", rotation: 20 },
    { left: "75%", top: "15%", rotation: 20 },
    { left: "80%", top: "10%", rotation: 30 },
    { left: "85%", top: "5%", rotation: 20 },
    { left: "90%", top: "0%", rotation: 30 },
  ]

  useEffect(() => {
    const footprints = document.querySelectorAll(".cat-footprint")

    const animateFootprints = () => {
      footprints.forEach((footprint, index) => {
        gsap.fromTo(
          footprint,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            delay: index * 0.5, // Délai progressif pour chaque empreinte
            onComplete: () => {
              // Faire disparaître l'empreinte après un certain temps
              gsap.to(footprint, { opacity: 0, duration: 1, delay: 3 })
            },
          }
        )
      })

      // Répéter l'animation après un délai
      timeoutId = setTimeout(animateFootprints, 15000) // Répéter toutes les 15 secondes
    }

    let timeoutId: number // Déclare une variable pour stocker l'ID du timeout

    // Lancer l'animation au premier rendu
    animateFootprints()

    // Nettoyer le timeout au démontage du composant
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section
      id="competences"
      className="text-white px-4 pt-12 pb-24 place-items-center"
    >
      <div className="background-container"></div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wider text-center my-16 block font-starjedi">
        {t("skills.title")}
      </h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mx-0 md:mx-10 lg:mx-30 place-items-center m-auto relative"
        style={
          window.innerWidth >= 640 // Vérifie si l'écran est `sm` ou plus large
            ? {
                gridTemplateColumns: `repeat(${cols}, ${cellWidth})`,
                gridTemplateRows: `repeat(${rows}, ${cellHeight})`,
                columnGap: "4px", // Ajuste l'espacement horizontal entre les colonnes
                rowGap: "4px", // Ajuste l'espacement vertical
              }
            : {}
        }
      >
        {positions.map((position, index) => {
          const skill = shuffledSkills[index]
          return (
            <SkillCard
              key={index}
              frontImage={frontImage}
              backImage={skill?.image}
              skill={skill?.skill}
              category={skill?.category}
              position={position}
              size={{ width: `${cols * 100}%`, height: `${rows * 100}%` }}
            />
          )
        })}
        {/* Empreintes de pas de chat */}
        {customCatFootprints.map((footprint, index) => (
          <div
            key={index}
            className="cat-footprint absolute"
            style={{
              position: "absolute",
              left: footprint.left,
              top: footprint.top,
              backgroundImage: `url(/assets/cat-paws.png)`,
              backgroundSize: "contain",
              width: "64px",
              height: "64px",
              opacity: 0, // Pour l'animation fade-in
              transform: `rotate(${footprint.rotation}deg)`,
              filter: `invert(30%) sepia(70%) saturate(500%) hue-rotate(240deg)`, // Violet
            }}
          />
        ))}
      </div>
    </section>
  )
}

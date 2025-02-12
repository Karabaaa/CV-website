import SkillCard from "../components/SkillCard"

const data = [
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
    skills: [
      "Anglais bilingue",
      "Esprit d'équipe",
      "Relationnel",
      "Communication",
      "Empathique",
    ],
  },
  {
    category: "Compétences Organisationnelles",
    image: "/assets/organisation-skill-card.png",
    skills: [
      "Adaptabilité",
      "Fiable",
      "Responsable",
      "Organisée",
      "Apprends vite",
      "Sens analytique",
      "Bonne gestion",
    ],
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

export default function Skills() {
  return (
    <section
      id="competences"
      className="bg-gray-800 text-white px-4 pt-12 pb-24 place-items-center"
    >
      <h2 className="text-4xl font-bold text-center my-16">Mes Compétences</h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mx-0 md:mx-10 lg:mx-30 place-items-center m-auto"
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
      </div>
    </section>
  )
}

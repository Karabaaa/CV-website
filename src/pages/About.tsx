import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      className="text-center p-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold my-16">À propos de moi</h2>
      <div className="mt-4 text-lg text-justify px-6 lg:px-16">
        <p>
          Je m'appelle Amandine, j'ai bientôt 30 ans, et depuis 2024, je me suis
          reconvertie en développeuse web. Mon parcours atypique m’a conduite à
          explorer des domaines variés avant de me passionner pour le web et les
          nouvelles technologies.
        </p>
        <br />
        <p>
          J'ai débuté mon parcours académique en obtenant un Bachelor en
          Business Administration à HEC Montréal, suivi d'un diplôme en
          Ingénierie Culturelle et Management à l'ICART à Paris. Ces années
          m'ont permis d'acquérir des compétences solides en gestion, tout en
          nourrissant ma passion pour l'industrie du cinéma. J'ai alors commencé
          ma carrière dans ce secteur, en travaillant dans différents domaines,
          de la production à l'exploitation, en participant au Festival de
          Cannes et en contribuant aux ventes internationales. Ma dernière
          expérience a été dans la location de matériel de tournage chez
          Panavision.
        </p>
        <br />
        <p>
          Après avoir exploré dans son ensemble l'industrie cinématographique,
          j’ai ressenti le besoin de me réinventer. Le monde du web m’a attirée,
          et j’ai décidé de me lancer en tant qu'autodidacte. En m’entourant de
          développeurs expérimentés qui m'ont soutenue, j’ai appris à coder
          seule. Cette démarche s'explique par plusieurs raisons :
        </p>
        <ul className="ml-10 lg:ml-20 mt-5 list-disc space-y-3 text-base">
          <li>
            L'accès à une immense quantité de ressources d'apprentissage
            gratuites en ligne.
          </li>
          <li>Un intérêt financier.</li>
          <li>
            Une volonté de me prouver à moi-même que j'étais capable d'apprendre
            par mes propres moyens.
          </li>
        </ul>
        <br />
        <p>
          2024 a été une année de transformation où je me suis challengée sous
          tous les aspects : persévérance, discipline et régularité m'ont permis
          d’acquérir des compétences en JavaScript, HTML, CSS, TypeScript, ainsi
          qu'en React, Node.js, Bootstrap, MailGun, Postman, Cloudinary,
          MongoDB, Heroku, Figma, Netlify et GitHub. Sur le plan personnel, j’ai
          également dépassé mes limites : j'ai décroché mon niveau 1 de plongée
          et appris à surfer, surmontant ainsi ma peur des profondeurs.
        </p>
        <br />
        <p>
          Pour 2025, mon objectif est de décrocher mon premier contrat en tant
          que développeuse web. Pour continuer à me surpasser, je me suis aussi
          lancée le défi de courir un marathon à la fin avril. Mon état d’esprit
          actuel est celui de la détermination et du dépassement de soi, et je
          suis plus que jamais motivée à devenir une développeuse web
          talentueuse.
        </p>
      </div>
    </motion.section>
  )
}

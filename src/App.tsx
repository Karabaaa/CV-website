import NavBar from "./pages/NavBar"
import Intro from "./pages/Intro"
import About from "./pages/About"
import Timeline from "./pages/Timeline"
import Experiences from "./pages/Experiences"
import Skills from "./pages/Skills"
import FunFacts from "./pages/FunFacts"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Footer from "./pages/Footer"

function App() {
  console.log(import.meta.env.VITE_BACKEND_URL)

  return (
    <div>
      <NavBar />
      <main className="pt-20">
        <Intro />
        <About />
        <Timeline />
        <Experiences />
        <Skills />
        <Portfolio />
        <FunFacts />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Project from "./sections/Project"
import TechStack from "./sections/TechStack"
import Footer from "./layout/Footer"

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

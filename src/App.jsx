import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Project from "./sections/Project"
import TechStack from "./sections/TechStack"
import Footer from "./layout/Footer"
import GitHubContributions from "./sections/GitHubContributions"

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <GitHubContributions />
        <Experience />
        <Education />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

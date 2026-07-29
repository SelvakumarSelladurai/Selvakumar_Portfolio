import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Project from "./sections/Project"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App

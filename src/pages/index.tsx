import { Header } from "../components/Header";
import { About } from "../components/About";
import { Home } from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";



export default function Index() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </>
  )
}

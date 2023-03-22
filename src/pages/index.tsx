import { Header } from "../components/Header";
import { About } from "../components/About";
import { Home } from "../components/Main/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";



export default function Index() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

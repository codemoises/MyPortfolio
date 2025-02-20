import { About } from "../components/About";
import { Home } from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/layout";



export default function Index() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

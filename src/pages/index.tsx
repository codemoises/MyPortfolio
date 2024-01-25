import { About } from "../components/About";
import { Home } from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/layout";



export default function Index() {
  return (
    <>
      <Home />
      <Box background={"#202020"} width={"100%"} height={"2px"}></Box>
      <About />
      <Box background={"#202020"} width={"100%"} height={"2px"}></Box>
      <Projects />
      <Box background={"#202020"} width={"100%"} height={"2px"}></Box>
      <Skills />
      <Footer />
    </>
  )
}

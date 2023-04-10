import { Box, Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container";
import { TextContent } from "../Common/DefaultText";
import CardProjects from "./CardProjects";

export default function ProjectContent() {
  return (
    <Container display={""} alignItems={""} height={"auto"} id={"projects"}>
      <Box marginTop={["0", "0", "24px"]} padding={["0", "0", "8px 0 0 25px"]}>
        <TextContent text={"Projetos"} />
        <Flex marginTop={["0", "0", "24px"]} padding={["0", "0", "8px 0 0 0"]} justifyContent={"space-around"}>
          <CardProjects
            src={"/assets/Image/calculadora 1.svg"}
            alt={"Icone de calculadora"}
            title={"Calculadora"}
            description={
              "Uma calculadora simples desenvolvida com HTML, CSS e JavaScript é um programa que permite realizar cálculos matemáticos básicos."
            }
            link={"https://calculadora-theta.vercel.app/"}
          />
          <CardProjects
            src={"/assets/Image/calculadora 1.svg"}
            alt={"Icone de calculadora"}
            title={"Calculadora"}
            description={
              "Uma calculadora simples desenvolvida com HTML, CSS e JavaScript é um programa que permite realizar cálculos matemáticos básicos."
            }
            link={""}
          />
          <CardProjects
            src={"/assets/Image/calculadora 1.svg"}
            alt={"Icone de calculadora"}
            title={"Calculadora"}
            description={
              "Uma calculadora simples desenvolvida com HTML, CSS e JavaScript é um programa que permite realizar cálculos matemáticos básicos."
            }
            link={""}
          />
        </Flex>
      </Box>
    </Container>
  );
}

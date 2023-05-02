import { Box, Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container";
import { TextContent } from "../Common/DefaultText";
import CardProjects from "./CardProjects";

export default function ProjectContent() {
  return (
    <Container display={""} alignItems={""} height={"auto"} id={"projects"}>
      <Box marginTop={["0", "0", "24px"]} padding={["0", "0", "8px 0 0 25px"]}>
        <TextContent text={"Projetos"} />
        <Flex
          marginTop={["16px", "16px", "16px", "16px", "24px"]}
          padding={["0", "0", "8px 0 0 25px"]}
          gap={["150px", "100px"]}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <CardProjects
            title={"Calculadora"}
            description={"Calculadora simples criada com HTML5, CSS3 e JavaScript."}
            link={"https://calculadora-theta.vercel.app/"}
            src={"/assets/Image/calculadora.svg"}
            alt={"Imagem da calculadora"}          />

          <CardProjects
            title={"Landing Page"}
            description={"Landing page para implementar habilidades em HTML5 e CSS3"}
            link={"https://landing-page-gamma-five.vercel.app/"}
            src={"/assets/Image/landingPage.svg"}
            alt={"Imagem da Landing Page"}          />
        </Flex>
      </Box>
    </Container>
  );
}

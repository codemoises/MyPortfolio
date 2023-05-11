import { Box, Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container";
import { TextContent } from "../Common/DefaultText";
import CardProjects from "./CardProjects";

export default function ProjectContent() {
  return (
    <Container display={""} alignItems={""} id={"projects"}>
      <Box marginTop={["0", "0", "24px"]} padding={["20px"]}>
        <TextContent text={"Projetos"} />
        <Flex
          marginTop={["24px", "24px", "24px", "24px", "24px"]}
          padding={["8px 0 0 0", "8px 0 0 0", "8px 0 0 25px"]}
          gap={["55px", "55px", "150px", "100px"]}
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
          <CardProjects title={"Spotify Clone"} link={"https://spotify-clone-dev-web.vercel.app/"} description={"Clone do Spotify. Feito em colaboração com alguns amigos."} alt={"Imagem da logo do Spotify"} src={"/assets/Image/spotifyClone.svg"} />
        </Flex>
      </Box>
    </Container>
  );
}

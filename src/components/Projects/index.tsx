import { Box, Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container";
import { TextContent } from "../Common/DefaultText";
import CardProjects from "../ProjectsCard";

export default function Projects() {
  return (
    <Box id={"projects"} margin="0 auto"
    maxWidth="1440px"
    padding={[
      "132px 8px 32px 8px",
      "0 8px 32px 8px",
      "0 8px 32px 8px",
      "0 8px 32px 8px",
      "0 8px 32px 8px",
      "0px 16px 96px",
    ]}>
      <Box marginTop={["0", "0", "24px"]} padding={["20px"]}>
        <TextContent text={"Projetos"} />
        <Flex
          marginTop={["24px", "24px", "24px", "24px", "24px"]}
          padding={["8px 0 0 0", "8px 0 0 0", "8px 0 0 25px"]}
          columnGap={"47px"}
          rowGap={["16px", "16px", "16px", "0", "0"]}
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
    </Box>
  );
}

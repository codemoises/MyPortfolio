import { Box, Flex } from "@chakra-ui/react";
import { TextContent } from "../Common/DefaultText";
import CardProjects2 from "../ProjectsCard copy";

export default function Projects() {
  return (
    <Box 
      id={"projects"}
      maxWidth="1200px"
      margin="0 auto"
      padding={[
        "42px 8px 64px 8px",
        "42px 25px 64px 25px",
        "42px 25px 64px 25px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
    ]}>
      <Box>
        <Box padding={["0 0 0 10px", "0 0 0 10px", 0, 0, 0]}>
          <TextContent fontWeight={"400"} fontSize={["18px", "18px", "18px", "18px", "19px", "20px"]} text={"Projetos"} />
        </Box>
        <Flex
          padding={["32px 8px 0 8px", "16px 0 0 0", "16px 0 0 0", "16px 0 0 0", "32px 25px 0 25px"]}
          margin={["0","0 auto", "0", "0", "0"]}
          flexWrap={"wrap"}
          justifyContent={["center", "center", "space-between", "space-between", "space-between"]} rowGap={"64px"}
        >
      
            <CardProjects2
              title={"BlueTalks"}
              link={"https://github.com/SaulloPontes/Bluetalks"}
              description={"Uma prancheta virtual que facilite a comunicação de pessoas com deficiência."}
              alt={"Imagem do Bluetalks"}
              src={"/assets/Image/bluetalks.svg"}          />
            <CardProjects2
              title={"Calculadora"}
              description={"Calculadora simples criada com HTML5, CSS3 e JavaScript."}
              link={"https://calculadora-theta.vercel.app/"}
              src={"/assets/Image/calculadora.svg"} alt={"Imagem da calculadora"}          />

            <CardProjects2
              title={"Landing Page"}
              description={"Landing page para implementar habilidades em HTML5 e CSS3."}
              link={"https://landing-page-gamma-five.vercel.app/"}
              src={"/assets/Image/landingPage.svg"} alt={"Imagem da landing page"}          />
            <CardProjects2 title={"Spotify Clone"} link={"https://spotify-clone-dev-web.vercel.app/"} description={"Clone do Spotify. Feito em colaboração com alguns amigos."} alt={"Imagem da logo do Spotify"} src={"/assets/Image/spotifyClone.svg"} />
          </Flex>
      </Box>
    </Box>
  );
};

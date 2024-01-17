import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { TextContent } from "../Common/DefaultText";
import CardProjects from "../ProjectsCard";

export default function Projects() {
  return (
    <Box id={"projects"} margin="0 auto"
    maxWidth="1200px"
    padding={[
      "132px 0px 32px 0px",
      "132px 8px 32px 8px",
      "0 24px 157px 24px",
      "0px 16px 157px 16px",
      "0px 16px 157px 16px",
      "0px 16px 157px 16px",
    ]}>
      <Box>  
        <Box padding={["0 0 0 10px", "0 0 0 10px", 0, 0, 0]}>
          <TextContent fontWeight={"400"} fontSize={["18px", "18px", "18px", "18px", "19px", "20px"]} text={"Projetos"} />
        </Box>
        <Flex
          padding={["16px 8px 0 8px", "16px 0 0 0", "16px 0 0 0", "16px 0 0 0", "16px 0 0 25px"]}
          gap={"32px"}
          justifyContent={["center", "space-between", "space-between", "space-between", "space-between"]}
          flexWrap={"wrap"}
        >
          <CardProjects 
            title={"BlueTalks"}
            link={"https://github.com/SaulloPontes/Bluetalks"}
            description={"Uma prancheta virtual que facilite a comunicação de pessoas com deficiência."}
            alt={"Imagem do Bluetalks"}
            src={"/assets/Image/bluetalks.svg"}          />

          <CardProjects
            title={"Calculadora"}
            description={"Calculadora simples criada com HTML5, CSS3 e JavaScript."}
            link={"https://calculadora-theta.vercel.app/"}
            src={"/assets/Image/calculadora.svg"} alt={"Imagem da calculadora"}          />

          <CardProjects
            title={"Landing Page"}
            description={"Landing page para implementar habilidades em HTML5 e CSS3."}
            link={"https://landing-page-gamma-five.vercel.app/"}
            src={"/assets/Image/landingPage.svg"} alt={"Imagem da landing page"}          />

          <CardProjects title={"Spotify Clone"} link={"https://spotify-clone-dev-web.vercel.app/"} description={"Clone do Spotify. Feito em colaboração com alguns amigos."} alt={"Imagem da logo do Spotify"} src={"/assets/Image/spotifyClone.svg"} />
        </Flex>
      </Box>
    </Box>
  );
};

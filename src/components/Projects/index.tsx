import { Box, Flex } from "@chakra-ui/react";
import { TextContent } from "../Common/DefaultText";
import CardProjects2 from "../ProjectsCard copy";

export default function Projects() {
  return (
    <Box 
      id={"projects"}
      maxWidth={"1200px"}
      margin={"0 auto"}
      padding={[
        "42px 8px 64px 8px",
        "42px 25px 64px 25px",
        "42px 25px 64px 25px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
    ]}>
        <Box padding={["0 0 0 10px", 0, 0, 0, 0]}>
          <TextContent fontWeight={"300"} fontSize={["18px", "18px", "18px", "18px", "24px", "24px"]} text={"Projetos"} />
        </Box>
        <Flex
          className={"centerMedia"}
          padding={["32px 8px 0 8px", "16px 0 0 0", "16px 0 0 0", "16px 0 0 0", "32px 25px 0 25px"]}
          flexWrap={"wrap"}
          justifyContent={["center", "space-between", "space-between", "space-between", "space-between"]} rowGap={"64px"}
        >
      
            <CardProjects2
              title={"BlueTalks"}
              link={"https://github.com/SaulloPontes/Bluetalks"}
              description={"Uma prancheta virtual que facilite a comunicação de pessoas com deficiência."}
              alt={"Imagem do Bluetalks"}
              src={"/assets/Image/bluetalks.svg"}          />

            <CardProjects2
              title={"Landing Page"}
              description={"Landing page para implementação de habilidades em HTML5 e CSS3."}
              link={"https://landing-page-gamma-five.vercel.app/"}
              src={"/assets/Image/landingPage.svg"} alt={"Imagem da landing page"}          />
            <CardProjects2 
              title={"Spotify Web"} 
              link={"https://spotify-clone-dev-web.vercel.app/"} 
              description={"Spotify Website. Uma versão feita com React.js."} 
              alt={"Imagem da logo do Spotify"} 
              src={"/assets/Image/spotifyClone.svg"} />
          </Flex>
    </Box>
  );
};

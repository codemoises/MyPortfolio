import { Box, Flex } from "@chakra-ui/react";
import { TextContent } from "../Common/DefaultText";
import SkillsCard from "../SkillsCard";

export default function ContentSkills() {
  return (
    <Box 
      id={"skills"} 
      margin="0 auto"
      maxWidth="1200px"
      padding={[
        "96px 8px 32px 8px",
        "96px 8px 45px 8px",
        "96px 24px 45px 24px",
        "96px 24px 157px 24px",
        "96px 8px 157px 24px",
        "96px 16px 157px 16px"
      ]}
    >
      <Box>
        <Box 
          padding={[
            "0 0 0 10px", 
            "0 0 0 10px", 
            0, 
            0, 
            0
          ]}
        >
          <TextContent 
            fontWeight={"400"}
            fontSize={[
              "18px", 
              "18px", 
              "18px", 
              "18px", 
              "19px", 
              "20px"
            ]} 
            text={"Conhecimentos"} 
          />
        </Box>
        <Flex 
          padding={["32px 8px 0 8px", "16px 0 0 0", "16px 0 0 0", "16px 0 0 0", "32px 25px 0 25px"]}
          justifyContent={["center", "space-between", "space-between", "space-between", "space-between"]}
          flexWrap={"wrap"}
          rowGap={"32px"}
        >
          <SkillsCard src="/assets/Image/javascript.svg" alt="imagem logo do javaScript" title="JavaScript" description="No JavaScript foi onde tudo começou, sendo esta a minha primeira linguagem de programação." />
          <SkillsCard src="/assets/Image/typescript.svg" alt="Imagem logo do typeScript" title="TypeScript" description="
          Em paralelo com o React, tive a oportunidade de aprender e me familiarizar com o TypeScript, adicionando tipagem aos meus códigos" />
          <SkillsCard src="/assets/Image/react.svg" alt="imagem logo do reactJS" title="React Js" description="Em 2022, dei início à minha exploração no universo da componentização na programação, utilizando o React como minha primeira biblioteca JavaScript para esse propósito." />
          <SkillsCard src="/assets/Image/html5.svg" alt="imagem logo do html5" title="HTML5" description="Juntamente com JavaScript, o HTML5 também foi uma das minhas primeiras linguagens, marcando o início da minha jornada no desenvolvimento web." />
          <SkillsCard src="/assets/Image/css3.svg" alt="imagem logo do CSS3" title="CSS3" description="
          Após adquirir conhecimentos em HTML5, o CSS3 desempenhou um papel crucial ao possibilitar pequenas estilizações, tornando-se o catalisador do meu interesse pelo design web." />
          <SkillsCard src="/assets/Image/next.svg" alt="imagem logo do next" title="Next Js" description="
          Após iniciar meu aprendizado em React, busquei aprimorar meus projetos adotando Next.js. Utilizei funções de pré-renderização para otimizar o desempenho das páginas e explorei funcionalidades avançadas de roteamento." />
        </Flex>
      </Box>
    </Box>
  );
};

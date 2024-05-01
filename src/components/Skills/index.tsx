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
        "42px 8px 64px 8px",
        "42px 25px 64px 25px",
        "42px 25px 64px 25px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
      ]}
    >
      <Box>
        <Box padding={["0 0 0 10px", "0 0 0 10px", 0, 0, 0]}>
          <TextContent
            fontWeight={"300"}
            fontSize={["18px", "18px", "18px", "18px", "24px", "24px"]}
            text={"Conhecimentos"}
          />
        </Box>
        <Flex
          padding={[
            "32px 8px 0 8px",
            "16px 0 0 0",
            "16px 0 0 0",
            "16px 0 0 0",
            "32px 25px 0 25px",
          ]}
          justifyContent={[
            "center",
            "space-between",
            "space-between",
            "space-between",
            "space-between",
          ]}
          flexWrap={"wrap"}
          rowGap={"32px"}
        >
          <SkillsCard
            src="/assets/icons/javascript.svg"
            alt="imagem logo do javaScript"
            title="JavaScript"
            description="No fascinante mundo da programação, minha jornada teve início no JavaScript, marcando-o como a primeira linguagem que explorei e aprendi."
          />
          <SkillsCard
            src="/assets/icons/typescript.svg"
            alt="Imagem logo do typeScript"
            title="TypeScript"
            description="
          Em paralelo com o React, tive a oportunidade de aprender e me familiarizar com o TypeScript, adicionando tipagem aos meus códigos"
          />
          <SkillsCard
            src="/assets/icons/react.svg"
            alt="imagem logo do reactJS"
            title="React Js"
            description="Em 2022, dei início à minha exploração no universo da componentização na programação, utilizando o React como minha primeira biblioteca JavaScript para esse propósito."
          />
          <SkillsCard
            src="/assets/icons/html5.svg"
            alt="imagem logo do html5"
            title="HTML5"
            description="Juntamente com JavaScript, o HTML5 também foi uma das minhas primeiras linguagens, marcando o início da minha jornada no desenvolvimento web."
          />
          <SkillsCard
            src="/assets/icons/css3.svg"
            alt="imagem logo do CSS3"
            title="CSS3"
            description="
          Após adquirir conhecimentos em HTML5, o CSS3 desempenhou um papel crucial ao possibilitar pequenas estilizações, tornando-se o catalisador do meu interesse pelo design web."
          />
          <SkillsCard
            src="/assets/icons/next.svg"
            alt="imagem logo do next"
            title="Next Js"
            description="
          Após iniciar meu aprendizado em React, busquei aprimorar meus projetos adotando Next.js. Utilizei funções de pré-renderização para otimizar o desempenho das páginas e explorei funcionalidades avançadas de roteamento."
          />
        </Flex>
      </Box>
    </Box>
  );
}

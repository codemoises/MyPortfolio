import { Box } from "@chakra-ui/react";
import { TextContent } from "../Common/DefaultText";

export function AboutText() {
  return (
    <Box 
      margin={"24px 8px 0"}
    >
      <TextContent
        fontFamily={"'Mukta', sans-serif"}
        fontSize={["14px", "18px"]}
        color={"#7c7d80"}
        width={"auto"}
        lineHeight={"140%"}
        text={"Eu sou um Desenvolvedor Front-End de Aquiraz, Ceará. Sou formado em uma universidade mas também tenho aprendido por conta própria a mais de 2 anos."}
      />
      <br />
      <TextContent
        fontFamily={"'Mukta', sans-serif"}
        fontSize={["14px", "18px"]}
        color={"#7c7d80"}
        width={"auto"}
        lineHeight={"140%"}
        text={"Habilidade em programação, design de componentes e desenvolvimento de layouts responsivos. Sempre em busca de novas experiências e modelos de interfaces inovadores para aprimorar a interação do usuário."}
      />
    </Box>
  );
};

import { Box } from "@chakra-ui/react";
import { TextContent } from "../../Common/DefaultText";

export function AboutText() {
  return (
    <Box marginTop="24px" paddingLeft="40px">
      <TextContent
        fontFamily="Mukta"
        fontSize={["18px", "24px"]}
        color="#7c7d80"
        width="auto"
        textTransform="-moz-initial"
        lineHeight="140%"
        text="Desenvolvedor Front-End, moro em Ceará, em uma cidade chamada Aquiraz. Estou estudando em uma universidade, mas na maioria do tempo tenho estudado sozinho para apromirar minhas habilidades."
        _hover={{ transform: "none" }}
      ></TextContent>
      <br />
      <TextContent
        fontFamily="Mukta"
        fontSize={["18px", "24px"]}
        color="#7c7d80"
        width="auto"
        textTransform="-moz-initial"
        lineHeight="140%"
        text="Iniciei nessa jornada em agosto de 2021, desde então, tenho dedicado grande parte do meu tempo aos estudos. Vejo que estou no caminho certo, pois, vejo os resultados que as horas dedicadas trazem."
        _hover={{ transform: "none" }}
      ></TextContent>
    </Box>
  );
}

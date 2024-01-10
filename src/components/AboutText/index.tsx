import { Box } from "@chakra-ui/react";
import { TextContent } from "../Common/DefaultText";

export function AboutText() {
  return (
    <Box marginTop="24px" paddingLeft="40px">
      <TextContent
        fontFamily="Mukta"
        fontSize={["12px", "18px"]}
        color="#7c7d80"
        width="auto"
        textTransform="-moz-initial"
        lineHeight="140%"
        text="Eu sou um Desenvolvedor Front-End de Aquiraz, Ceará. Estou estudando em uma universidade, mas também tenho aprendido por conta própria. Gosto de programação e design web, e tenho habilidades em tecnologias como HTML, CSS, JavaScript, React e Next. Meu objetivo é continuar crescendo como Desenvolvedor Front-End e contribuir para projetos que melhorem a experiência do usuário na web."
        _hover={{ transform: "none" }}
      ></TextContent>
      <br />
      <TextContent
        fontFamily="Mukta"
        fontSize={["12px", "18px"]}
        color="#7c7d80"
        width="auto"
        textTransform="-moz-initial"
        lineHeight="140%"
        text="Comecei minha jornada como desenvolvedor em agosto de 2021 e desde então tenho me dedicado muito aos estudos. Tenho percebido que meu esforço tem dado resultado, pois consigo ver o progresso no meu aprendizado e o impacto disso no meu trabalho. Acredito que estou no caminho certo e estou motivado a continuar aprendendo e evoluindo na minha carreira como desenvolvedor."
        _hover={{ transform: "none" }}
      ></TextContent>
    </Box>
  );
}

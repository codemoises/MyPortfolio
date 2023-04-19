import { Box, Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container";
import { TextContent } from "../Common/DefaultText";
import CardProjects from "./CardProjects";

export default function ProjectContent() {
  return (
    <Container display={""} alignItems={""} height={"auto"} id={"projects"}>
      <Box marginTop={["0", "0", "24px"]} padding={["0", "0", "8px 0 0 25px"]}>
        <TextContent text={"Projetos"} />
        <Flex
          marginTop={["16px", "16px", "16px", "16px", "24px"]}
          padding={["0", "0", "8px 0 0 25px"]}
          rowGap={"60px"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <CardProjects
            src={"/assets/Image/calculadora.svg"}
            alt={"Imagem da calculadora"}
            link={"https://calculadora-theta.vercel.app/"}
            title={"Calculadora"}
            description={"Uma calculadora simples criada com HTML5, CSS3 e JavaScript é um aplicativo web que permite fazer operações matemáticas básicas, como soma, subtração, multiplicação e divisão. Ela possui botões numéricos, um display para mostrar os números e o resultado, além de botões para as operações. O HTML é usado para criar a estrutura, o CSS é usado para o estilo e o JavaScript é usado para fazer as operações e mostrar o resultado. É uma ferramenta útil para cálculos rápidos na web."} linkRepository={"https://github.com/mwises/calculadora"}          />
        </Flex>
      </Box>
    </Container>
  );
}

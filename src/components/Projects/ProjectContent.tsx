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
          gap={"150px"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <CardProjects
            title={"Calculadora"}
            description={"Uma calculadora simples criada com HTML5, CSS3 e JavaScript. É um aplicativo web que permite fazer operações matemáticas básicas, como soma, subtração, multiplicação e divisão. Ela possui botões numéricos, um display para mostrar os números e o resultado, além de botões para as operações. O HTML é usado para criar a estrutura, o CSS é usado para o estilo e o JavaScript é usado para fazer as operações e mostrar o resultado. É uma ferramenta útil para cálculos rápidos na web."}
            link={"https://calculadora-theta.vercel.app/"}
            linkRepository={"https://github.com/mwises/calculadora"}
            src={"/assets/Image/calculadora.svg"}
            alt={"Imagem da calculadora"}          />

          <CardProjects
            title={"Landing Page"}
            description={"Uma landing page criada usando HTML5 e CSS3 é uma página web projetada para incentivar os visitantes a tomar uma ação específica, como preencher um formulário ou comprar um produto. HTML5 é a linguagem de marcação usada para estruturar o conteúdo da página, enquanto o CSS3 é usado para definir o estilo visual da página."}
            link={"https://landing-page-gamma-five.vercel.app/"}
            linkRepository={"https://github.com/mwises/landingPage"}
            src={"/assets/Image/landingPage.svg"}
            alt={"Imagem da Landing Page"}          />
        </Flex>
      </Box>
    </Container>
  );
}

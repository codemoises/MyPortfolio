import { Box, Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container";
import { TextContent } from "../Common/DefaultText";
import CardSkill from "../SkillsCard";

export default function ContentSkills() {
  return (
    <Container display={""} alignItems={""} id={"skills"}>
      <Box padding="20px">
        <TextContent width="fit-content" text={"Conhecimentos"} />
        <Flex flexDirection="column" gap={["65px", "65px", "45px", "20px"]}>
          <CardSkill
            img={"/assets/Image/javascript.svg"}
            alt={"Logo do JavaScript"}
            title={"JavaScript"}
            description={
              "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
            }
          />
          <CardSkill
            img={"assets/Image/typescript.svg"}
            alt={"Logo do TypeScript"}
            title={"TypeScript"}
            description={
              "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."
            }
          />
          <CardSkill
            img={"assets/Image/react.svg"}
            alt={"Logo do react"}
            title={"React.js"}
            description={
              "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
            }
          />
          <CardSkill
            img={"assets/Image/next.svg"}
            alt={"Logo do next"}
            title={"Next.js"}
            description={
              "Next é uma empresa brasileira de tecnologia, que atua como fintech e operadora de cartões de crédito e débito, com sede na cidade de São Paulo, no estado homônimo."
            }
          />
          <CardSkill
            img={"assets/Image/html5.svg"}
            alt={"Logo do html5"}
            title={"HTML5"}
            description={
              "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML."
            }
          />
          <CardSkill
            img={"assets/Image/css3.svg"}
            alt={"Logo do css3"}
            title={"CSS3"}
            description={
              "CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página."
            }
          />
        </Flex>
      </Box>
    </Container>
  );
}

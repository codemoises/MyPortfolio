import { Box } from "@chakra-ui/react";
import { Container } from "../Common/Container";
import { TextContent } from "../Common/DefaultText";
import CardProjects from "./CardProjects";

export default function ProjectContent() {
  return (
    <Container display={""} alignItems={""} height={"auto"} id={"projects"}>
      <Box marginTop={["0", "0", "24px"]} padding={["0", "0", "8px 0 0 25px"]}>
        <TextContent text={"Projetos"} />
        <CardProjects
          src={"/assets/Image/calculator-icon.svg"}
          alt={"Icone de calculadora"}
          title={"Calculadora"}
        />
      </Box>
    </Container>
  );
}

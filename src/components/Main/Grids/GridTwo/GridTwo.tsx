import { Box } from "@chakra-ui/react";
import { TextContent, TextContentThree } from "../../../Common/DefaultText";
import { Local } from "../../Variation";

export function GridTwo() {
  return (
    <>
      <Box
        margin={[
          "50px 22px",
          "50px 22px",
          "50px 22px",
          "50px 22px",
          "50px 22px",
          "72px 4px",
        ]}
        padding="16px 0"
      >
        <TextContent width="179px" text="Expecialidades"></TextContent>
        <TextContentThree text={"Desenvolvedor Front-End"}></TextContentThree>
        <TextContentThree text={"e estudante de Análise e Desenvolvimento de Sistemas."}></TextContentThree>
        <Local />
      </Box>
    </>
  );
}

import { Box } from "@chakra-ui/react";
import { TextContent, TextContentTwo } from "../../../Common/DefaultText";
import { SocialIcons } from "../../../Common/SocialIcons";

export function GridOne() {
  return (
    <>
      <Box
        width= ""
        margin={[
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 4px",
        ]}
        padding="16px 0"
      >
        <TextContent text="Olá, eu sou o"></TextContent>
        <TextContentTwo text="Moises Cruz"></TextContentTwo>
        <TextContent text="Desenvolvedor Front-End de Aquiraz, Ceará" />
        <SocialIcons />
      </Box>
    </>
  );
}

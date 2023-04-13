import { Box, Flex } from "@chakra-ui/react";
import { TextContent, TextContentTwo } from "../../../Common/DefaultText";
import { SocialIcons } from "../../../Common/SocialIcons";
import AnimateFile from "../../../Common/AnimateFile";

export function GridOne() {
  return (
    <>
      <Box
        width= ""
        margin={[
          "4px 4px 4px 4px",
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 4px",
        ]}
        padding="16px 0"
      >
        <TextContent text="Olá, eu sou o" />
        <TextContentTwo text="Moises Cruz" />
        <Flex>
          <TextContent text="Desenvolvedor Front-End de Aquiraz, Ceará."/> <AnimateFile />
        </Flex>
        <SocialIcons />
      </Box>
    </>
  );
}

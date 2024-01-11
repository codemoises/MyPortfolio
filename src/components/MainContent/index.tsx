import { Box, Flex } from "@chakra-ui/react";
import { TextContentTwo } from "../Common/DefaultText";
import { SocialIcons } from "../Common/SocialIcons";
import AnimateFile from "../Common/AnimateFile";

export function MainContent() {
  return (
    <>
      <Box
        margin={[
          "auto",
          "0 auto",
          "4px auto",
          "4px auto",
          "4px auto",
          "48px auto",
        ]}
        padding="16px 0"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <TextContentTwo text="Olá, eu sou o Moises Cruz" />
        <Flex justifyContent={"center"} flexDirection={"column"}>
          <Flex alignItems={"center"}>
            <TextContentTwo text="desenvolvedor Front-End"/>
            <AnimateFile />
          </Flex>
        </Flex>
        <SocialIcons />
      </Box>
    </>
  );
}

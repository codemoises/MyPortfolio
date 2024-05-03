import { Box, Flex } from "@chakra-ui/react";
import { AboutGrid } from "../AboutGrid";
import ImagesGrid from "../AboutImage";
import { TextContent } from "../Common/DefaultText";

export function About() {
  return (
    <Box
      id="about"
      margin="0 auto"
      maxWidth="1200px"
      padding={[
        "42px 8px 64px 8px",
        "42px 25px 64px 25px",
        "42px 25px 64px 25px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
      ]}
    >
      <Box padding={["0 0 0 10px", 0, 0, 0, 0]}>
        <TextContent
          fontWeight={"300"}
          fontSize={["18px", "18px", "18px", "18px", "24px", "24px"]}
          text="Sobre mim"
        />
      </Box>
      <Flex
        alignItems={[
          "center",
          "flex-start",
          "flex-start",
          "flex-start",
          "flex-start",
        ]}
        justifyContent={[
          "center",
          "flex-start",
          "flex-start",
          "flex-start",
          "space-between",
        ]}
        flexDirection={["column", "column", "column", "column", "row"]}
        padding={[
          "32px 8px 0 8px",
          "16px 0 0 0",
          "16px 0 0 0",
          "16px 0 0 0",
          "32px 25px 0 25px",
        ]}
      >
        <AboutGrid />
        <ImagesGrid />
      </Flex>
    </Box>
  );
}

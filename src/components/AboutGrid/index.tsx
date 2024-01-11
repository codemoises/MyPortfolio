import { Box } from "@chakra-ui/react";
import { TextContent } from "../Common/DefaultText";
import AboutList from "../AboutList";
import { AboutText } from "../AboutText";

export function AboutGrid() {
  return (
    <Box
      width={["auto", "auto", "auto", "auto", "calc(44.66667% - 8px)"]}
      margin={["4px", "4px", "4px", "4px", "4px"]}
      padding={["16px 24px 0 0", "16px 24px 0 0", "16px 24px 0 0", "16px 24px 0 0", "16px 24px 0 0"]}
      float="left"
    >
      <Box padding={["0 0 0 10px", "0 0 0 10px", 0, 0, 0]}>
        <TextContent text="Sobre mim" />
      </Box>

      <Box padding={["8px 8px 0 8px", "16px 0 0 0", "16px 0 0 0", "16px 0 0 0", "16px 0 0 25px"]}>
        <TextContent
          width="auto"
          color="#ffffff"
          lineHeight="100%"
          textTransform="-moz-initial"
          fontSize={["40px", "46px", "46px", "46px", "46px", "52px"]}
          text="Moises Cruz Braga"
          _hover={{ transform: "none" }}
        />
        <AboutText />
        <AboutList />
      </Box>
    </Box>
  );
}

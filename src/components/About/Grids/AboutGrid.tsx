import { Box } from "@chakra-ui/react";
import { TextContent } from "../../Common/DefaultText";
import AboutList from "./AboutList";
import { AboutText } from "./AboutText";

export function AboutGrid() {
  return (
    <Box
      width={["auto", "auto", "auto", "auto", "calc(41.66667% - 8px)"]}
      margin={["4px", "4px", "4px", "4px", "4px"]}
      padding={["16px 24px 0 0", "16px 24px 0 0", "16px 24px 0 0", "16px 24px 0 0", "16px 24px 0 0"]}
      float="left"
    >
      <TextContent text="Sobre mim" />

      <TextContent
        width="auto"
        marginTop="24px"
        padding="8px 0 0 25px"
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
  );
}

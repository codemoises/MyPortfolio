import { Box } from "@chakra-ui/react";
import { TextContent } from "../../Common/DefaultText";
import { SocialIcons } from "../../Common/SocialIcons";
import AboutList from "./AboutList";
import { AboutText } from "./AboutText";

export function AboutGrid() {
  return (
    <Box
      id="about"
      width={["auto", "auto", "auto", "auto", "calc(41.66667% - 8px)"]}
      margin={["4px", "4px", "4px", "4px", "4px"]}
      padding={["16px 24px 0 0", "16px 24px 0 0", "16px 24px 0 0", "16px 24px 0 0", "16px 24px 0 0"]}
      float="left"
    >
      <TextContent text="sobre mim" />

      <TextContent
        width="auto"
        marginTop="24px"
        padding="8px 0 0 25px"
        color="#ffffff"
        lineHeight="100%"
        textTransform="-moz-initial"
        fontSize={["46px", "46px", "46px", "46px", "46px", "52px"]}
        text="Moises Cruz Braga"
        _hover={{ transform: "none" }}
      />
      <AboutText />
      <AboutList />
      <SocialIcons />
    </Box>
  );
}

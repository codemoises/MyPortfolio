import { Box } from "@chakra-ui/react";
import { TextContent } from "../Common/DefaultText";
import AboutList from "../AboutList";
import { AboutText } from "../AboutText";
import { SocialIcons } from "../Common/SocialIcons";

export function AboutGrid() {
  return (
    <Box
      maxWidth={["330px", "calc(90.66667% - 8px)", "calc(90.66667% - 8px)", "calc(90.66667% - 8px)", "calc(44.66667% - 8px)"]}
      float="left"
    >
      <Box>
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
        <SocialIcons />
      </Box>
    </Box>
  );
};

import { Box } from "@chakra-ui/react";
import { TextContent, TextContentTwo } from "../Common/DefaultText";
import { SocialIcons } from "../Common/SocialIcons";
import { ImageComponent } from "../ImageComponent";

export function MainContent() {
  return (
    <>
      <Box
        width={"100%"}
        padding={"0 25px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Box>
          <Box width={["fit-content", "auto"]}>
            <TextContent 
              fontSize={["28px", "28px"]}
              text="Olá, eu sou o" />
          </Box>
          <Box width={["fit-content", "auto"]}>
            <TextContentTwo fontSize={["50px", "72px"]} margin={["12px 0 12px 12px"]} text="Moises Cruz" />
          </Box>
          <Box width={["fit-content", "auto"]}>
              <TextContent className="blink" fontSize={["28px", "28px"]} text="desenvolvedor Front-End."/>
          </Box>
          <SocialIcons />
        </Box>
        <Box display={["none", "none", "none", "none", "block"]}>
          <ImageComponent src="assets/Image/developer.svg" width="356px" alt="Imagem developer" />
        </Box>
      </Box>
    </>
  );
}

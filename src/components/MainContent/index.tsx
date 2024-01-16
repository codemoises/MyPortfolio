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
        justifyContent={["center", "center", "space-between"]}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Box>
          <Box>
            <TextContent
              textAlign={["center", "left", "left", "left", "left"]}
              color={"#c9c9c9"}
              fontSize={"30px"}
              text={"Olá, eu sou o"} 
            />
          </Box>
          <Box>
            <TextContentTwo
              fontFamily={"'Inter', sans-serif"} 
              fontWeight={"800"}
              textAlign={["center", "left", "left", "left", "left"]}
              fontSize={[
                "43px", 
                "68px",
                "82px",
                "82px",
                "82px"
              ]} 
              margin={[
                "16px 0 16px 0",
                "16px 0 16px 0",
                "12px 0 12px 0",
                "12px 0 12px 0",
                "12px 0 12px 0"
              ]} 
              text={"Moises Cruz"} 
            />
          </Box>
          <Box>
            <TextContent 
              textAlign={["center", "left", "left", "left", "left"]}
              color={"#c9c9c9"}
              className={"blink"} 
              fontSize={"30px"} 
              text={"desenvolvedor Front-End."} 
            />
          </Box>
          <SocialIcons />
        </Box>
        <Box
          display={[
            "none", 
            "none", 
            "none", 
            "none", 
            "block"
          ]}
        >
          <ImageComponent 
            src={"assets/Image/developer.svg"} 
            width={"356px"} 
            alt={"Imagem developer"} />
        </Box>
      </Box>
    </>
  );
};

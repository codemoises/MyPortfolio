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
          <Box
            width={[
              "fit-content", 
              "auto"
            ]}
          >
            <TextContent 
              fontSize={"30px"}
              text={"Olá, eu sou o"} 
            />
          </Box>
          <Box 
            width={[
              "fit-content", 
              "auto"
            ]}
          >
            <TextContentTwo 
              fontSize={[
                "62px", 
                "72px",
                "82px",
                "82px",
                "82px"
              ]} 
              margin={[
                "16px 0 16px 12px",
                "16px 0 16px 0",
                "12px 0 12px 0",
                "12px 0 12px 0",
                "12px 0 12px 0"
              ]} 
              text={"Moises Cruz"} 
            />
          </Box>
          <Box 
            width={[
              "fit-content", 
              "auto"
            ]}
          >
            <TextContent 
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

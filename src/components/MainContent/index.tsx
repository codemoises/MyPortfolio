import { Box, Flex } from "@chakra-ui/react";
import { TextContent, TextContentTwo } from "../Common/DefaultText";
import { ImageComponent } from "../ImageComponent";
import ButtonDefault from "../Common/ButtonDefault";

export function MainContent() {
  return (
    <>
      <Box
        width={"100%"}
        padding={["176px 16px 64px 16px", "242px 25px 64px 25px", "242px 25px 64px 25px", "0 25px", "0 25px"]}
        display={"flex"}
        justifyContent={["center", "center", "space-between"]}
        alignItems={["center", "flex-start", "flex-start", "center", "center"]}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <Box>
          <Flex flexDirection={"column"} alignItems={["center", "flex-start", "flex-start", "flex-start", "flex-start"]} className={"css-typing"}>
              <TextContent
                maxWidth={"fit-content"}
                textAlign={["center", "left", "left", "left", "left"]}
                color={"#c9c9c9"}
                fontSize={["20px", "30px", "30px", "30px", "30px"]}
                text={"Olá, eu sou o"} 
              />
              <TextContentTwo
                maxWidth={"fit-content"}
                fontFamily={"'Inter', sans-serif"} 
                fontWeight={"800"}
                textAlign={["center", "left", "left", "left", "left"]}
                fontSize={[
                  "35px", 
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
              <TextContent 
                textAlign={["center", "left", "left", "left", "left"]}
                color={"#c9c9c9"}
                className={"blink"} 
                fontSize={["20px", "30px", "30px", "30px", "30px"]}
                text={"desenvolvedor Front-End."} 
              />
          </Flex>
          <Flex justifyContent={["center", "flex-start", "flex-start", "flex-start", "flex-start"]}>
            <Box className="initial" marginRight={"12px"}>
              <ButtonDefault placeholder="Mais sobre mim" href="#about" bg />
            </Box>
            <Box className="initial2">
                <ButtonDefault placeholder="Ver projetos" href="#projects" />
            </Box>
          </Flex>
        </Box>
        <Box
          className={"animationimg"}
          marginTop={["62px", "62px", "62px", "0", "0"]}
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

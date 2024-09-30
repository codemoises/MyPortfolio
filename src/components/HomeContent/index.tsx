import { Box, Flex, Image } from "@chakra-ui/react";
import { TextContent, TextContentTwo } from "../Common/DefaultText";
import ButtonDefault from "../Common/ButtonDefault";
import { useEffect } from "react";

export function HomeContent() {
  useEffect(() => {
    setTimeout(() => {
      document.body
        .querySelector(".animationimg")
        ?.classList.add("developer-move");
    }, 1500);
  }, []);
  return (
    <Box
      width={"100%"}
      padding={[
        "176px 16px 64px 16px",
        "242px 25px 64px 25px",
        "242px 25px 64px 25px",
        "0 25px",
        "0 25px",
      ]}
      display={"flex"}
      justifyContent={["center", "center", "space-between"]}
      alignItems={["center", "flex-start", "flex-start", "center", "center"]}
      flexDirection={["column", "column", "column", "row", "row"]}
    >
      <Box>
        <Flex
          flexDirection={"column"}
          alignItems={[
            "center",
            "flex-start",
            "flex-start",
            "flex-start",
            "flex-start",
          ]}
          className={"css-typing"}
        >
          <TextContent
            maxWidth={"fit-content"}
            textAlign={["center", "left", "left", "left", "left"]}
            color={"#c9c9c9"}
            fontSize={["24px", "30px", "30px", "30px", "30px"]}
            text={"Olá, eu sou o"}
          />
          <TextContentTwo
            maxWidth={"fit-content"}
            fontFamily={"'Inter', sans-serif"}
            fontWeight={"800"}
            textAlign={["center", "left", "left", "left", "left"]}
            fontSize={["40px", "68px", "82px", "82px", "82px"]}
            margin={[
              "16px 0 16px 0",
              "16px 0 16px 0",
              "12px 0 12px 0",
              "12px 0 12px 0",
              "12px 0 12px 0",
            ]}
            text={"Moises Cruz"}
          />
          <TextContent
            textAlign={["center", "left", "left", "left", "left"]}
            color={"#c9c9c9"}
            className={"blink"}
            fontSize={["24px", "30px", "30px", "30px", "30px"]}
            text={"desenvolvedor Front-End."}
          />
        </Flex>
        <Flex
          margin={"48px 0"}
          justifyContent={[
            "center",
            "flex-start",
            "flex-start",
            "flex-start",
            "flex-start",
          ]}
          flexDirection={["column", "row", "row", "row", "row"]}
        >
          <Box
            m={[
              "0 0 2.5rem 0",
              "0 2rem 0 0",
              "0 2rem 0 0",
              "0 2rem 0 0",
              "0 2rem 0 0",
            ]}
            className="initial"
          >
            <ButtonDefault placeholder="Mais sobre mim" href="#about" bg />
          </Box>
          <Box className="initial2">
            <ButtonDefault placeholder="Ver projetos" href="#projects" />
          </Box>
        </Flex>
      </Box>
      <Box marginTop={["62px", "62px", "62px", "0", "0"]}>
        <Image
          className={"animationimg"}
          src={"assets/images/developer.svg"}
          width={"356px"}
          alt={"Imagem developer"}
        />
      </Box>
    </Box>
  );
}

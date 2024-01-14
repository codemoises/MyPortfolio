import { Box, Flex, Text } from "@chakra-ui/react";
import { ImageComponent } from "../ImageComponent";

export default function AboutList() {
  return (
    <Box 
      transform={"translate(0px, 0px)"} 
      opacity={"1"}
    >
      <Flex 
        marginTop={"24px"} 
        gap={"12px"} 
        alignItems={"center"}
      >
        <Box 
          width={"26px"} 
          margin={"0 4px"}
        >
          <ImageComponent
            src={"/assets/Image/v.svg"}
            alt={"Imagem de um 'V'"}
            width={"100%"}
            height={"15px"}
          />
        </Box>
        <Box 
          transition={".5s ease"} 
          _hover={{ paddingLeft: "12px" }}
        >
          <Text
            fontFamily={"'Mukta', sans-serif"}
            lineHeight={"130%"}
            color={"#c9c9c9"}
            fontSize={[
              "18px", 
              "20px", 
              "22px", 
              "24px"
            ]}
          >
            Análise e Desenvolvimento de Sistemas na Universidade de Fortaleza
            (UNIFOR).
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

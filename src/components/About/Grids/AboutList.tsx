import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function AboutList() {
  return (
    <Box transform="translate(0px, 0px)" opacity="1">
      <Flex marginLeft="48px" marginTop="24px" gap="12px" alignItems="center">
        <Box width="26px" margin="0 4px">
          <Image
            width="100%"
            height="15px"
            objectFit="cover"
            src="/assets/Image/check-icon2.svg"
            alt="Imagem de um 'V'"
          />
        </Box>
        <Box transition=".5s ease" _hover={{ paddingLeft: "12px" }}>
          <Text
            fontFamily="'Mukta', sans-serif"
            lineHeight="130%"
            color="#c9c9c9"
            fontSize="24px"
          >
            Análise e Desenvolvimento de Sistemas na Universidade de Fortaleza
            (UNIFOR).
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

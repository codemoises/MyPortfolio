import { Box, Flex, Text } from "@chakra-ui/react";
import { IconCheckIn } from "../Common/IconCheckIn";

export function PhraseOne() {
  return (
    <Text
      color="#c9c9c9"
      fontSize="20px"
      letterSpacing="1px"
      transition="all 0.5s ease"
      textTransform="uppercase"
      width="155px"
      _hover={{ transform: "translate(10px, 0)" }}
    >
      Olá, eu sou o
    </Text>
  );
}

export function PhraseTwo() {
  return (
    <Text
      width="813.328px"
      color="#ffffff"
      fontSize="100px"
      lineHeight="120%"
      paddingLeft="50px"
    >
      Moises Cruz
    </Text>
  );
}

export function PhraseThree() {
  return (
    <Text
      color="#c9c9c9"
      fontSize="20px"
      letterSpacing="1px"
      transition="all 0.5s ease"
      textTransform="uppercase"
      padding="25px 0 0 25px"
      width="155px"
      _hover={{ transform: "translate(10px, 0)" }}
    >
      Front-End
    </Text>
  );
}

export function PhraseFour() {
  return (
    <Text
      color="#c9c9c9"
      fontSize="20px"
      letterSpacing="1px"
      transition="all 0.5s ease"
      textTransform="uppercase"
      padding="25px 0 0 0"
      width="155px"
      _hover={{ transform: "translate(10px, 0)" }}
    >
      Developer
    </Text>
  );
}

export function PhraseFive() {
  return (
    <Text
      color="#c9c9c9"
      fontSize="20px"
      letterSpacing="1px"
      transition="all 0.5s ease"
      textTransform="uppercase"
      padding="25px 0 0 0"
      width="179px"
      _hover={{ transform: "translate(10px, 0)" }}
    >
      Expecialidades
    </Text>
  );
}

export function PhraseSix() {
  return (
    <Text
      fontFamily="sans-serif"
      color="#ffffff"
      fontSize="18px"
      letterSpacing="1px"
      padding="5px 0 0 50px"
    >
      Desenvolvedor Front-End e <br />
      estudante de Análise e Desenvolvimendo de Sistemas.
    </Text>
  );
}

export function Local() {
  return (
    <Box paddingTop="10px" margin="0 8px 0 8px">
      <Flex alignItems="center">
        <IconCheckIn />
        <Text
          fontSize="16px"
          lineHeight="140%"
          fontWeight="100"
          paddingLeft="12px"
        >
          Ceará, Brasil
        </Text>
      </Flex>
    </Box>
  );
}

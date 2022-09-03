import { Text } from "@chakra-ui/react";


export function PhraseOne() {
  return (
    <Text
      color="#c9c9c9"
      fontSize="20px"
      letterSpacing="1px"
      transition="all 0.5s ease"
      textTransform="uppercase"
      _hover={{ transform:"translate(10px, 0)" }}>
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
      paddingLeft="25px">
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
      _hover={{ transform:"translate(10px, 0)" }}>
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
      _hover={{ transform:"translate(10px, 0)" }}>
        Developer
    </Text>
  );
}

export function PhraseSix() {
  return (
    <Text
      color="#c9c9c9"
      fontSize="20px"
      letterSpacing="1px"
      transition="all 0.5s ease"
      textTransform="uppercase"
      padding="25px 0 0 0"
      _hover={{ transform:"translate(10px, 0)" }}>
        Expecialidades
    </Text>
  );
}

export function PhraseSeven() {
  return (
    <Text
      fontFamily="sans-serif"
      color="#ffffff"
      fontSize="18px"
      letterSpacing="1px"
      padding="5px 0 0 50px">
        Desenvolvedor Front-End e <br />
        estudante de Análise e Desenvolvimendo de Sistemas.
    </Text>
  );
}

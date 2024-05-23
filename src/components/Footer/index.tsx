import { Box, Link, Flex, Text } from "@chakra-ui/react";


export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"60px"}
      borderTop={"1px solid #282c31"}
      textAlign={"center"}
    >
      <Box
        fontSize={"14px"}
        fontFamily={"Open Sans, sans-serif"}
        color={"#c9c9c9"}
        display={"flex"}
        gap={"3px"}
      >
        Copyright © {year} Moises Cruz. Todos os direitos reservados.
      </Box>
    </Flex>
  );
}

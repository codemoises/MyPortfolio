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
        fontSize={"12px"}
        fontFamily={"Open Sans, sans-serif"}
        color={"#c9c9c9"}
        display={"flex"}
        gap={"3px"}
      >
        ©<Text>{year}</Text>
        <Link
          href="https://bio-tau.vercel.app/"
          target="_blank"
          rel="external"
          _hover={{ textDecoration: "none" }}
        >
          Moises Cruz
        </Link>
      </Box>
    </Flex>
  );
}

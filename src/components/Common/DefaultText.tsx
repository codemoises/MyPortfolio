import { Text as ChakraText, TextProps } from "@chakra-ui/react";

interface DefaultTextProps extends TextProps {
  text: string;
}

export function Text({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      fontFamily="sans-serif"
      fontSize="18px"
      color="#c9c9c9"
      cursor="pointer"
      transition="all 300ms ease"
      fontWeight=""
      
      _hover={{
        color: "#fefbfb",
        textUnderlineOffset: "8px",
        textDecoration: "underline #7343cc",
        textDecorationThickness:"2px"
      }}
    >
      {text}
    </ChakraText>
  );
}

export function TextContent({text, ...rest}: DefaultTextProps) {
  return (
    <ChakraText color="#c9c9c9"
    fontSize={["14px", "15px", "16px", "18px", "19px", "20px"]}
    letterSpacing="1px"
    transition="all 0.5s ease"
    textTransform="uppercase"
    width={["auto", "auto", "auto", "155px", "155px", "155px"]}
    _hover={{ transform: "translate(10px, 0)" }}>
      {text}
    </ChakraText>
  );
}
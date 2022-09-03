import { Text as ChakraText, TextProps } from "@chakra-ui/react";

interface DefaultTextProps extends TextProps {
  text: string;
}

export function Text({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      fontSize="18px"
      color="#c9c9c9"
      cursor="pointer"
      transition="all 300ms ease"
      
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

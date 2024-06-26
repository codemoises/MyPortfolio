import { Text as ChakraText, TextProps } from "@chakra-ui/react";
interface DefaultTextProps extends TextProps {
  text: string;
}

export function Text({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      className={"hoveredText"}
      fontFamily={"Saira, sans-serif"}
      fontWeight={"400"}
      fontSize={"16px"}
      color={"#c9c9c9"}
      cursor={"pointer"}
      position={"relative"}
      _hover={{
        color: "#fefbfb",
      }}
      _after={{
        content: "''",
        background: "linear-gradient(270deg, #6E3AFF 0%, #000 100%)",
        height: "1.7px",
        width: "0",
        position: "absolute",
        bottom: "-3px",
        left: "0",
        transition: "all 0.5s ease-in-out",
      }}
      {...rest}
    >
      {text}
    </ChakraText>
  );
}

export function TextContent({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      color={"#fff"}
      fontWeight={"300"}
      letterSpacing={"1px"}
      {...rest}
    >
      {text}
    </ChakraText>
  );
}

export function TextContentTwo({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText color={"#ffffff"} lineHeight={"120%"} {...rest}>
      {text}
    </ChakraText>
  );
}

export function TextContentThree({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      color={"#ffffff"}
      fontSize={["12px", "14px", "15px", "16px", "17px", "18px"]}
      letterSpacing={"1px"}
      {...rest}
    >
      {text}
    </ChakraText>
  );
}

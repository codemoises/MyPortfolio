import { Text as ChakraText, TextProps } from "@chakra-ui/react";
interface DefaultTextProps extends TextProps {
  text: string;
}

export function Text({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      className="hoveredText"
      fontFamily= "Saira, sans-serif"
      fontWeight="400"
      fontSize="16px"
      color="#c9c9c9"
      cursor="pointer"
      position="relative"
      _hover={{
        color: "#fefbfb",
      }}
      _after={{ content: "''", background: "linear-gradient(270deg, #6E3AFF 0%, #000 100%)", height: "1.7px", width: "0", position: "absolute", bottom: "-3px", left: "0", transition: "all 0.5s ease-in-out" }}
      {...rest}
    >
      {text}
    </ChakraText>
  );
}

export function TextContent({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      color={"#c9c9c9"}
      fontSize={["16px", "16px", "16px", "18px", "19px", "20px"]}
      fontWeight={"300"}
      letterSpacing={"1px"}
      paddingLeft={["0", "0", "6px"]}
      {...rest}
    >
      {text}
    </ChakraText>
  );
}

export function TextContentTwo({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      color="#ffffff"
      fontSize={["20px", "30px", "30px", "40px", "40px", "50px"]}
      fontWeight={"300"}
      margin={"8px 0"}
      lineHeight={"120%"}
      {...rest}
    >
      {text}
    </ChakraText>
  );
}

export function TextContentThree({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      fontFamily="sans-serif"
      color="#ffffff"
      fontSize={["12px", "14px", "15px", "16px", "17px", "18px"]}
      letterSpacing="1px"
      {...rest}
    >
      {text}
    </ChakraText>
  );
}
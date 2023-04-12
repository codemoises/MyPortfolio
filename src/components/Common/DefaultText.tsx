import { Text as ChakraText, TextProps } from "@chakra-ui/react";
interface DefaultTextProps extends TextProps {
  text: string;
}

export function Text({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      className="hoveredText"
      fontFamily="sans-serif"
      fontSize="18px"
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
      color="#c9c9c9"
      fontSize={["14px", "15px", "16px", "18px", "19px", "20px"]}
      letterSpacing="1px"
      paddingLeft={"6px"}
      width={["auto"]}
      {...rest}
    >
      {text}
    </ChakraText>
  );
}

export function TextContentTwo({ text, ...rest }: DefaultTextProps) {
  return (
    <ChakraText
      width={["auto", "auto", "512px", "620px", "813.328px"]}
      color="#ffffff"
      fontSize={["40px", "56px", "66px", "76px", "76px", "80px"]}
      lineHeight="120%"
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
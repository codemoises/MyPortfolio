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
      transition="all 0.5s ease"
      fontWeight=""
      _hover={{
        color: "#fefbfb",
        textUnderlineOffset: "8px",
        textDecoration: "underline #6E3AFF",
        textDecorationThickness: "2px",
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
      color="#c9c9c9"
      fontSize={["14px", "15px", "16px", "18px", "19px", "20px"]}
      letterSpacing="1px"
      transition="all 0.5s ease"
      textTransform="uppercase"
      width={["auto", "auto", "auto", "155px", "155px", "155px"]}
      _hover={{ transform: "translate(10px, 0)" }}
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
      fontSize={["40px", "56px", "66px", "76px", "86px", "100px"]}
      lineHeight="120%"
      paddingLeft="50px"
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
      padding={[
        "12px 0 0 20px",
        "12px 0 0 25px",
        "12px 0 0 50px",
        "12px 0 0 50px",
        "12px 0 0 50px",
        "5px 0 0 50px",
      ]}
      {...rest}
    >
      {text}
    </ChakraText>
  );
}
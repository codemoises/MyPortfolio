import { Box, Flex, Image } from "@chakra-ui/react";
import { TextContentThree } from "../Common/DefaultText";

interface CardProjectProps {
  src: string;
  alt: string;
  title: string;
}

export default function CardProjects({ src, alt, title }: CardProjectProps) {
  return (
    <Box
      maxWidth="250px"
      marginTop={["0", "0", "24px"]}
      padding={["0", "0", "8px 0 0 25px"]}
    >
      <Flex
        width="100%"
        backgroundColor="#1A1A1A"
        flexDirection="column"
        padding={"16px"}
        margin={""}
      >
        <Box width="25px">
          <Image width="100%" src={src} alt={alt} />
        </Box>
        <TextContentThree
          color="#c9c9c9"
          padding={"0"}
          margin={"0"}
          text={title}
        />
      </Flex>
    </Box>
  );
}

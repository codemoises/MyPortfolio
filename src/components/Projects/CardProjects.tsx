import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { Text, TextContentThree, TextContentTwo } from "../Common/DefaultText";

interface CardProjectProps {
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
}

export default function CardProjects({
  src,
  alt,
  title,
  description,
  link,
}: CardProjectProps) {
  return (
    <Box maxWidth="sm" maxHeight="418px" borderBottom={"1px solid"} borderRadius={"xl"}>
      <Flex width="100%" flexDirection="column">
        <Box w={"384px"} h={"230px"}>
          <Image width="100%" height="100%" borderTopRadius={"xl"} src={src} alt={alt} />
        </Box>
        <TextContentThree
          margin={"8px 8px 0 8px"}
          padding={"8px 8px 0 8px"}
          text={title}
        />
        <TextContentTwo
          width={"auto"}
          color={"#c9c9c9"}
          fontSize={["12px", "16px"]}
          margin={"6px"}
          padding={"6px"}
          text={description}
        />
        <Link href={link} rel="External" target="_blank" maxWidth="158px" padding={"16px"} margin={"auto"} _hover={{ textDecoration: "none" }}>
          <Text text={"Visitar projeto!"} _hover={{}} />
        </Link>
      </Flex>
    </Box>
  );
}

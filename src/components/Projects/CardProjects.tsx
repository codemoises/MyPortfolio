import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";

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
    <Link href={link} target="_blank" rel="external" textDecoration={"none"} _hover={{}}>
      <Box maxWidth="sm" borderBottom={"1px solid #6E3AFF"}>
        <Flex width="100%" flexDirection="column" padding={"16px"} margin={""}>
          <Box width="25px">
            <Image width="100%" src={src} alt={alt} />
          </Box>
          <TextContentTwo
            width={"auto"}
            color={"#c9c9c9"}
            fontSize={["12px", "16px"]}
            margin={"6px 0"}
            padding={"6px 0"}
            text={description}
          />
          <TextContentThree padding={"0"} margin={"0"} text={title} />
        </Flex>
      </Box>
    </Link>
  );
}

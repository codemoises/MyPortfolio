import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";

interface CardProjectProps {
  title: string;
  link: string;
  description: string;
  alt: string;
  src: string;
}

export default function CardProjects({
  title,
  link,
  description,
  src,
  alt,
}: CardProjectProps) {
  return (
    <Flex
      width="100%"
      gap={["50px", "100px", "135px", "200px"]}
      height={["330px", "330px", "370px", "365px"]}
      alignItems="center"
      
      justifyContent={["center"]}
      flexDirection="row"
    >
      <Flex w={"xl"} h={"100%"} flexDirection="column" position="relative">
        <TextContentThree
          margin={"8px 8px 0 8px"}
          padding={"8px 8px 0 4px"}
          fontFamily={"Electrolize, sans-serif"}
          fontSize={["24px", "26px", "28px", "30px"]}
          text={title}
        />

        <TextContentTwo
          width={"auto"}
          color={"#a2a3a5"}
          fontSize={["12px", "14px", "15px", "16px", "18px"]}
          margin={"12px 6px 0 6px"}
          padding={"12px 6px 0 6px"}
          lineHeight={"140%"}
          text={description}
        />
        <Flex margin={"12px 6px"}
            padding={"12px 6px"} gap={"14px"} alignItems={"center"}>
          <Link href={link} _hover={{}}>Visualizar projeto</Link>
        </Flex>
      </Flex>
      <Box display={["none", "none", "block", "block"]} w={"384px"} h={"300px"}>
        <Image width="100%" height="100%" src={src} alt={alt} />
      </Box>
    </Flex>
  );
}

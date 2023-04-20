import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { Text, TextContentThree, TextContentTwo } from "../Common/DefaultText";
import { ButtonProjects } from "../Common/ButtonDefault";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface CardProjectProps {
  title: string;
  link: string;
  linkRepository: string;
  description: string;
  alt: string;
  src: string;
}

export default function CardProjects({
  title,
  description,
  link,
  linkRepository,
  src,
  alt,
}: CardProjectProps) {
  return (
    <Flex
      width="100%"
      gap="200px"
      height="365px"
      alignItems="center"
      flexDirection="row"
    >
      <Flex w={"xl"} h={"100%"} flexDirection="column" position="relative">
        <TextContentThree
          margin={"8px 8px 0 8px"}
          padding={"8px 8px 0 4px"}
          fontFamily={"Electrolize, sans-serif"}
          fontSize={"30px"}
          text={title}
        />

        <TextContentTwo
          width={"auto"}
          color={"#a2a3a5"}
          fontSize={["12px", "18px"]}
          margin={"12px 6px"}
          padding={"12px 6px"}
          lineHeight={"140%"}
          text={description}
        />
        <Flex
          margin={"8px"}
          padding={"6px"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={"22px"}
          position={"absolute"}
          bottom={"0"}
        >
          <ButtonProjects placeholder={"Clique para visitar"} href={link} />
          <Link href={linkRepository} color={"#863bff"} isExternal>
            Abrir repositório <ExternalLinkIcon mx="2px" />
          </Link>
        </Flex>
      </Flex>
      <Box w={"384px"} h={"300px"}>
        <Image width="100%" height="100%" src={src} alt={alt} />
      </Box>
    </Flex>
  );
}

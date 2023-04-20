import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { Text, TextContentThree, TextContentTwo } from "../Common/DefaultText";
import { ButtonProjects } from "../Common/ButtonDefault";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface CardProjectProps {
  src: string;
  alt: string;
  link: string;
  linkRepository: string;
  title: string;
  description: string;
}

export default function CardProjects({
  src,
  alt,
  title,
  description,
  link,
  linkRepository
}: CardProjectProps) {
  return (
      <Flex width="100%" gap="200px" alignItems="center" flexDirection="row">
        <Flex w={"xl"} flexDirection="column">
          <TextContentThree
            margin={"8px 8px 0 8px"}
            padding={"8px 8px 0 8px"}
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
          <Flex margin={"8px"} padding={"8px"} flexDirection={"row"} alignItems={"center"} gap={"22px"}>
            <ButtonProjects placeholder={"Clique para visitar"} href={link} />
            <Link href={linkRepository} color={"#863bff"} isExternal>
              Abrir repositório <ExternalLinkIcon mx='2px' />
            </Link>
          </Flex>
        </Flex>
        <Box w={"384px"} h={"300px"}>
          <Image width="100%" height="100%" src={src} alt={alt} />
        </Box>
      </Flex>
  );
}

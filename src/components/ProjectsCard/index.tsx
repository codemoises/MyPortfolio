import { Box, Flex, Link } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";
import ProjectsImage from "../ProjectsImage";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
      background={"#151515"}
      border={"2px solid #262424"}
      borderRadius={"4px"}
      width={"330px"}
      padding={"16px 16px 24px 16px"}
      alignItems="center"
      justifyContent={["flex-start"]}
      flexDirection={["column"]}
    >
      <ProjectsImage src={src} alt={alt} />
      <Box
        maxWidth={["330px"]}
        height={"100%"}
        display={"flex"}
        padding={["12px 0 0 0"]}
        flexDirection={"column"}
        flex={"wrap"}
        justifyContent={"center"}
      >
        <TextContentThree
          fontFamily={"Saira, sans-serif"}
          fontWeight={"400"}
          fontSize={["22px"]}
          padding={["0 0 4px 0"]}
          text={title}
        />

        <TextContentTwo
          color={"#a2a3a5"}
          fontSize={["14px"]}
          lineHeight={"140%"}
          padding={["6px 0"]}
          text={description}
        />
        <Flex padding={["4px 0 0 0"]} alignItems={"center"}>
          <Link
            className="hoveredText"
            href={link}
            target="_blank"
            rel="external"
            fontSize={["14px"]}
            transition={"all 0.5s ease-in-out"}
            _hover={{}}
            position={"relative"}
            _after={{
              content: "''",
              background: "linear-gradient(270deg, #7528F0 0%, #000 100%)",
              height: "1.7px",
              width: "0",
              position: "absolute",
              bottom: "-3px",
              left: "0",
              transition: "all 0.5s ease-in-out",
            }}
          >
            Visualizar projeto
          </Link>
          <ExternalLinkIcon marginLeft={"6px"} />
        </Flex>
      </Box>
    </Flex>
  );
}

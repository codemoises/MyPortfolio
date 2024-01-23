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
      width={["330px", "466px", "720px", "1668px", "555px"]}
      marginBottom={"110px"}
      alignItems="center"
      justifyContent={["flex-start"]}
      flexDirection={["column", "row", "row", "row", "row"]}
    >
      <ProjectsImage src={src} alt={alt} />
      <Box
        maxWidth={["330px", "236px", "490px", "490px", "325px"]}
        display={"flex"}
        padding={["12px 0", "0 0 0 16px", "0 0 0 16px", "0 0 0 16px", "0 0 0 16px"]}
        flexDirection={"column"}
        flex={"wrap"}
        justifyContent={"center"}
      >
        <TextContentThree
          fontFamily={"Saira, sans-serif"}
          fontWeight={"300"}
          fontSize={["20px", "22px", "25px", "25px", "25px"]}
          padding={["0 0 4px 0", "0", "0", "0", "0"]}
          text={title}
        />

        <TextContentTwo
          color={"#a2a3a5"}
          fontSize={["14px", "14px", "15px", "15px", "16px"]}
          lineHeight={"140%"}
          padding={["6px 0", "6px 0", "6px 0", "6px 0", "8px 0"]}
          text={description}
        />
        <Flex
          padding={["4px 0 4px 0", "0", "0", "0", "0"]}
          alignItems={"center"}
        >
          <Link
            className="hoveredText"
            href={link}
            target="_blank"
            rel="external"
            fontSize={["14px", "16px"]}
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
          <ExternalLinkIcon marginLeft={"6px"} display={["block", "none", "none", "none", "none"]} />
        </Flex>
      </Box>
    </Flex>
  );
};

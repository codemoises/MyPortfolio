import { Flex, Link } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";
import ImageContent from "../ProjectsImage";
import ProjectsImage from "../ProjectsImage";

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
      w={"lg"}
      maxHeight={"222px"}
      alignItems="center"
      justifyContent={["flex-start"]}
      flexDirection={["row", "row", "row", "row", "row"]}
    >
      <ProjectsImage src={src} alt={alt} />
      <Flex
        w={"sm"}
        h={"100%"}
        margin={["0", "0", "0", "8px 8px 0 0px", "8px 8px 0 0px"]}
        flexDirection={"column"}
        position={"relative"}
        justifyContent={"center"}
      >
        <TextContentThree
          margin={"8px 8px 0 8px"}
          padding={"8px 8px 0 4px"}
          fontFamily={"Saira, sans-serif"}
          fontWeight={"300"}
          fontSize={["16px", "18px", "20px", "25px"]}
          text={title}
        />

        <TextContentTwo
          width={"auto"}
          color={"#a2a3a5"}
          fontSize={["14px", "14px", "14px", "15px", "16px"]}
          margin={"4px 6px 0 6px"}
          padding={"4px 6px 0 6px"}
          lineHeight={"140%"}
          text={description}
        />
        <Flex
          margin={ "12px 6px"}
          padding={"12px 6px"}
          gap={"14px"}
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
              background: "linear-gradient(270deg, #6E3AFF 0%, #000 100%)",
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
        </Flex>
      </Flex>
    </Flex>
  );
};

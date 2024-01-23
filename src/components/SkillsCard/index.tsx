import { Box, Flex, Link } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";
import ProjectsImage from "../ProjectsImage";
import { ImageComponent } from "../ImageComponent";

interface CardProjectProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function CardProjects({
  title,
  description,
  src,
  alt,
}: CardProjectProps) {
  return (
    <Flex
      width={["330px", "466px", "720px", "1668px", "555px"]}
      marginBottom={"110px"}
      justifyContent={["flex-start"]}
      flexDirection={"column"}
    >
      <Box width={"40px"}>
        <ImageComponent width="100%" src={src} alt={alt}  />
      </Box>
      <Flex
        width={["auto", "auto", "490px", "490px", "auto"]}
        flexDirection={"column"}
        position={"relative"}
        justifyContent={"center"}
      >
        <TextContentThree
          fontFamily={"Saira, sans-serif"}
          fontWeight={"300"}
          fontSize={["16px", "18px", "20px", "25px"]}
          padding={["6px 0", "6px 0", "6px 0", "6px 0", "16px 0"]}
          text={title}
        />

        <TextContentTwo
          color={"#a2a3a5"}
          fontSize={["14px", "14px", "14px", "15px", "16px"]}
          lineHeight={"140%"}
          text={description}
        />
      </Flex>
    </Flex>
  );
};

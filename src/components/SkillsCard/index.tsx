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
      width={["330px"]}
      justifyContent={["flex-start"]}
      flexDirection={"column"}
    >
      <Box width={"40px"}>
        <ImageComponent width="100%" src={src} alt={alt}  />
      </Box>
      <Flex
        flexDirection={"column"}
        position={"relative"}
        justifyContent={"center"}
      >
        <TextContentThree
          fontFamily={"Saira, sans-serif"}
          fontWeight={"400"}
          fontSize={["22px", "22px", "25px", "25px"]}
          padding={"16px 0"}
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

import { Box, Flex } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";
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
      className="article"
      maxWidth={["auto", "auto", "330px", "330px", "330px"]}
      justifyContent={["flex-start"]}
      flexDirection={"column"}
      paddingTop={"32px"}
      borderTop={"2px solid #202020"}
    >
      <Box height={"48px"} className="animation-skills" display={"flex"} alignItems={"center"}>
        <ImageComponent width="36px" src={src} alt={alt} />
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
}

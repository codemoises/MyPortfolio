import { Flex, Image, Box } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";
import { ImageComponent } from "../ImageComponent";

interface CardProps {
  img: string;
  alt: string;
  title: string;
  description: string;
}

export default function CardSkill({ img, alt, title, description }: CardProps) {
  return (
    <Flex
      flexDirection={"row"}
      marginTop={["24px"]}
      padding={["8px 0 0 0", "8px 0 0 0", "8px 0 0 25px"]}
      alignItems="center"
      justifyContent={["space-evenly", "space-evenly", "space-evenly", "space-evenly", "space-evenly", "space-between"]}
    >
      <Box display={"flex"}>
        <ImageComponent width="85px" height="85px" src={img} alt={alt} />
      </Box>
      <Flex
        flexDirection="column"
        width={["200px", "400px", "600px", "800px", "1080px", "1200px"]}
        alignItems={"start"}
      >
        <TextContentThree
          text={title}
        />
        <TextContentTwo
          color={"#a2a3a5"}
          fontSize={["12px", "16px"]}
          letterSpacing={"0.3px"}
          lineHeight={"140%"}
          text={description}
        />
      </Flex>
    </Flex>
  );
}

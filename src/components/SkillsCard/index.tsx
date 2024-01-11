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
      alignItems="center"
    >
      <Box display={"flex"} margin={["0", "0", "0px 8px 0 0px", "0px 8px 0 0px", "0px 8px 0 0px"]}
             padding={["0", "0", "0px 8px 0 0px", "0px 8px 0 0px", "0px 8px 0 0px"]}>
        <ImageComponent width="85px" height="85px" src={img} alt={alt} />
      </Box>
      <Flex
        flexDirection="column"
        width={["330px", "530px", "600px", "800px", "900px", "960px"]}
        margin={"8px 8px 0 8px"}
        padding={"8px 8px 0 4px"}
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

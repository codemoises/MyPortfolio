import { Flex, Image, Box } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";

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
      marginTop={["0", "0", "24px"]}
      padding={["0", "0", "8px 0 0 25px"]}
      alignItems="center"
      justifyContent={["space-between", "space-evenly", "start", "start"]}
    >
      <Box width="100px">
        <Image width="100%" src={img} alt={alt} />
      </Box>
      <Flex flexDirection="column" width={["200px", "400px", "auto", "auto", "auto"]} alignItems={"start"}>
        <TextContentThree
          padding={["0", "12px 0 0 50px", "12px 0 0 50px"]}
          text={title}
        />
        <TextContentTwo
          color="#c9c9c9"
          padding={["0px", "12px 0 0 50px", "12px 0 0 50px"]}
          fontSize={["12px", "16px"]}
          text={description}
        />
      </Flex>
    </Flex>
  );
}

import { Flex, Box } from "@chakra-ui/react";
import { ImageComponent } from "../ImageComponent";

interface CardProps {
  img: string;
  alt: string;
}

export default function SkillsCard({ img, alt }: CardProps) {
  return (
    <Flex
      flexDirection={"row"}
      alignItems="center"
    >
      <Box>
        <ImageComponent width={"146.83px"} src={img} alt={alt} />
      </Box>
    </Flex>
  );
}

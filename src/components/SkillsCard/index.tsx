import { Box, Flex } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";
import { ImageComponent } from "../ImageComponent";

interface CardProjectProps {
  src: string;
  alt: string;
  border?: boolean;
  altAnimation?: boolean;
  altWidth?: boolean;
}

export default function CardProjects({
  src,
  alt,
  altAnimation = false,
  altWidth = false,
}: CardProjectProps) {
  return (
    <Flex
      className="article"
      maxWidth={["auto", "auto", "330px", "330px", "330px"]}
      justifyContent={"center"}
      flexDirection={"row"}
      alignItems={"center"}
      height={["88px"]}
      borderWidth={"0.5px"}
      borderColor={"#2a1152"}
    >
      <Box
        height={"48px"}
        className={altAnimation ? "alt-animation-skills" : "animation-skills"}
        display={"flex"}
        alignItems={"center"}
      >
        <ImageComponent
          width={altWidth ? "60px" : "36px"}
          src={src}
          alt={alt}
        />
      </Box>
    </Flex>
  );
}

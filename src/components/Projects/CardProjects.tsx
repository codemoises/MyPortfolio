import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";

interface CardProjectProps {
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
}

export default function CardProjects({
  src,
  alt,
  title,
  description,
  link,
}: CardProjectProps) {
  return (
    <Box maxWidth="sm">
      <Flex width="100%" flexDirection="column" padding={""} margin={""}>
        <Box width="">
          <Image width="100%" borderTopRadius={"xl"} src={src} alt={alt} />
        </Box>
        <TextContentThree
          margin={"8px 0 0 0"}
          padding={"8px 0 0 0"}
          text={title}
        />
        <TextContentTwo
          width={"auto"}
          color={"#c9c9c9"}
          fontSize={["12px", "16px"]}
          margin={"6px 0"}
          padding={"6px 0"}
          text={description}
        />
        <Link href={link} rel="External" target="_blank" padding={"8px 0 0 0"} margin={"8px 0 0 0"} _hover={{ textDecoration: "none" }}>
          <Button
            fontWeight={"medium"}
            bg={"none"}
            border={"1px solid"}
            _hover={{ bg: ""}}
            _active={{
              bg: "",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
          >
            Visitar
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

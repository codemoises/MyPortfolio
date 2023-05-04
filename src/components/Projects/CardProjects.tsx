import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";

interface CardProjectProps {
  number: string;
  title: string;
  link: string;
  description: string;
  alt: string;
  src: string;
}

export default function CardProjects({
  number,
  title,
  link,
  description,
  src,
  alt,
}: CardProjectProps) {
  return (
    <Flex
      width="100%"
      height={["330px", "330px", "370px", "365px"]}
      alignItems="center"
      
      justifyContent={["center"]}
      flexDirection="row"
    >
      <Flex w={"sm"} h={"100%"} flexDirection={"column"} position={"relative"} justifyContent={"center"}>
        <TextContentTwo width={"auto"} margin={"8px 8px 0 4px"}
          padding={"8px 8px 0 2px"} text={number} />
        <TextContentThree
          margin={"8px 8px 0 8px"}
          padding={"8px 8px 0 4px"}
          fontFamily={"Saira, sans-serif"}
          fontWeight={"300"}
          fontSize={["24px", "26px", "28px", "30px"]}
          text={title}
        />

        <TextContentTwo
          width={"auto"}
          color={"#a2a3a5"}
          fontSize={["12px", "13px", "14px", "15px", "16px"]}
          margin={"4px 6px 0 6px"}
          padding={"4px 6px 0 6px"}
          lineHeight={"140%"}
          text={description}
        />
        <Flex margin={"12px 6px"}
            padding={"12px 6px"} gap={"14px"} alignItems={"center"}>
          <Link className="hoveredText" href={link} _hover={{}} position={"relative"} _after={{ content: "''", background: "linear-gradient(270deg, #6E3AFF 0%, #000 100%)", height: "1.7px", width: "0", position: "absolute", bottom: "-3px", left: "0", transition: "all 0.5s ease-in-out" }}>Visualizar projeto</Link>
        </Flex>
      </Flex>
      <Box display={["none", "none", "block", "block"]} w={"384px"} h={"300px"}>
        <Image width="100%" height="100%" src={src} alt={alt} />
      </Box>
    </Flex>
  );
}

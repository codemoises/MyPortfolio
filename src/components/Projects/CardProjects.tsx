import { Flex, Link } from "@chakra-ui/react";
import { TextContentThree, TextContentTwo } from "../Common/DefaultText";
import ImageContent from "./ImageContent";

interface CardProjectProps {
  title: string;
  link: string;
  description: string;
  alt: string;
  src: string;
}

export default function CardProjects({
  title,
  link,
  description,
  src,
  alt,
}: CardProjectProps) {
  return (
    <Flex
      width="100%"
      height={["auto", "auto", "370px", "365px"]}
      alignItems="center"
      justifyContent={["flex-start"]}
      flexDirection={["column", "row", "row", "row", "row"]}
    >
      <ImageContent src={src} alt={alt} />
      <Flex
        w={"sm"}
        h={"100%"}
        margin={["0", "0", "0", "8px 8px 0 0px", "8px 8px 0 0px"]}
        padding={"8px 8px 0 0px"}
        flexDirection={"column"}
        position={"relative"}
        justifyContent={"center"}
      >
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
          fontSize={["14px", "14px", "14px", "15px", "16px"]}
          margin={"4px 6px 0 6px"}
          padding={"4px 6px 0 6px"}
          lineHeight={"140%"}
          text={description}
        />
        <Flex
          margin={["30px 6px", "12px 6px"]}
          padding={"12px 6px"}
          gap={"14px"}
          alignItems={"center"}
          justifyContent={["center", "flex-start", "flex-start", "flex-start", "flex-start"]}
        >
          <Link
            className="hoveredText"
            href={link}
            target="_blank"
            rel="external"
            _hover={{}}
            position={"relative"}
            _after={{
              content: "''",
              background: "linear-gradient(270deg, #6E3AFF 0%, #000 100%)",
              height: "1.7px",
              width: "0",
              position: "absolute",
              bottom: "-3px",
              left: "0",
              transition: "all 0.5s ease-in-out",
            }}
          >
            Visualizar projeto
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

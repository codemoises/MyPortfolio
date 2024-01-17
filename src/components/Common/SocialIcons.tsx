import { Box, Link, Flex } from "@chakra-ui/react";
import { ImageComponent } from "../ImageComponent";

export function SocialIcons() {
  return (
    <>
      <Box 
        maxWidth={"fit-content"}
        margin={"26px 0 0 0"} 
        padding={"26px 0 0 0"}
      >
        <Flex 
          className="social"
          justifyContent={["center", "flex-start", "flex-start", "flex-start", "flex-start"]}
          transition={"opacity 0.2s ease-in 0s"}
        >
          <Link
            href={"mailto:moisesbraga223@gmail.com"}
            target={"_blank"}
            rel={"external"}
            margin={"0 8px"}
            transition={"all 0.5s ease-in-out"}
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <ImageComponent
              src={"/assets/Image/gmail-icon.svg"}
              height={"30px"}
              alt={"Ícone do Email"}
            />
          </Link>
          <Link
            href={"http://www.instagram.com/moisescrvz"}
            target={"_blank"}
            rel={"external"}
            margin={"0 8px"}
            transition={"all 0.5s ease-in-out"}
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <ImageComponent
              src={"../assets/Image/insta-icon.svg"}
              height={"30px"}
              alt={"Ícone do instagram"}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/moises-cruz-04531521b/"}
            target={"_blank"}
            rel={"external"}
            margin={"0 8px"}
            transition={"all 0.5s ease-in-out"}
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <ImageComponent
              src={"/assets/Image/linkedin-icon.svg"}
              height={"30px"}
              alt={"Ícone do linkedin"}
            />
          </Link>
          <Link
            href={"http://www.github.com/mwises"}
            target={"_blank"}
            rel={"external"}
            margin={"0 8px"}
            transition={"all 0.5s ease-in-out"}
            _hover={{ transform: "translate(0, -10px)"}}
          >
            <ImageComponent
              src={"/assets/Image/github-icon.svg"}
              height={"30px"}
              alt={"Ícone do instagram"}
            />
          </Link>
        </Flex>
      </Box>
    </>
  );
};

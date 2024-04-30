import { Box, Link, Flex } from "@chakra-ui/react";
import { ImageComponent } from "../ImageComponent";

export function SocialIcons() {
  return (
    <>
      <Box marginTop={"70px"}>
        <Flex
          className="social"
          justifyContent={[
            "center",
            "flex-start",
            "flex-start",
            "flex-start",
            "flex-start",
          ]}
          transition={"opacity 0.2s ease-in 0s"}
        >
          <Link
            href={"http://www.instagram.com/moisescrvz"}
            target={"_blank"}
            rel={"external"}
            margin={"0 8px"}
            transition={"all 0.5s ease-in-out"}
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <ImageComponent
              src="/assets/Image/insta-icon.svg"
              alt="icone do instagram"
              height="30"
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
              src="/assets/Image/linkedin-icon.svg"
              alt="icone do linkedin"
              height="30"
            />
          </Link>
          <Link
            href={"mailto:moisesbraga223@gmail.com"}
            target={"_blank"}
            rel={"external"}
            margin={"0 8px"}
            transition={"all 0.5s ease-in-out"}
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <ImageComponent
              src="/assets/Image/gmail-icon.svg"
              alt="icone do email"
              height="30"
            />
          </Link>
          <Link
            href={"http://www.github.com/codemoises"}
            target={"_blank"}
            rel={"external"}
            margin={"0 8px"}
            transition={"all 0.5s ease-in-out"}
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <ImageComponent
              src="/assets/Image/github-icon.svg"
              alt="icone do github"
              height="30"
            />
          </Link>
        </Flex>
      </Box>
    </>
  );
}

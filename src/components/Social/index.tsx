import { Box, Flex } from "@chakra-ui/react";
import SocialIconComponent from "../SocialIconComponent";

export function Social() {
  return (
    <Box marginTop={"40px"}>
      <Flex
        className={"social"}
        width={["auto", "auto", "550px", "550px", "auto"]}
        justifyContent={"space-between"}
        flexDirection={["column", "row", "row", "row", "row"]}
        transition={"opacity 0.2s ease-in 0s"}
      >
        <SocialIconComponent
          href={"https://www.linkedin.com/in/moises-cruz-04531521b/"}
          src={"/assets/icons/linkedin.svg"}
          alt={"Ícone do linkedin"}
          social={"Linkedin"}
        />
        <SocialIconComponent
          href={"http://www.instagram.com/moisescrvz"}
          src={"/assets/icons/instagram.svg"}
          alt={"Ícone do instagram"}
          social={"Instagram"}
        />
        <SocialIconComponent
          href={"http://www.github.com/codemoises"}
          src={"/assets/icons/github.svg"}
          alt={"Ícone do github"}
          social={"GitHub"}
        />
      </Flex>
    </Box>
  );
}

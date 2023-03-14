import { Box, Link, Image, Flex } from "@chakra-ui/react";

export function SocialIcons() {
  return (
    <>
      <Box margin="44px 16px" padding="8px 8px 8px 35px">
        <Flex gap="24px">
          <Link
            href="mailto:moisesbraga223@gmail.com"
            target="_blank"
            rel="external"
            transition="all 0.5s ease-in-out"
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <Image
              src="../assets/Image/gmail-icon.svg"
              height="30px"
              alt="Ícone do Email"
            />
          </Link>
          <Link
            href="http://www.instagram.com/moisescruz_"
            target="_blank"
            rel="external"
            transition="all 0.5s ease-in-out"
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <Image
              src="../assets/Image/insta-icon.svg"
              height="30px"
              alt="Ícone do instagram"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/moises-cruz-04531521b/"
            target="_blank"
            rel="external"
            transition="all 0.5s ease-in-out"
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <Image
              src="../assets/Image/linkedin-icon.svg"
              height="30px"
              alt="Ícone do instagram"
            />
          </Link>
          <Link
            href="http://www.github.com/mwises"
            target="_blank"
            rel="external"
            transition="all 0.5s ease-in-out"
            _hover={{ transform: "translate(0, -10px)" }}
          >
            <Image
              src="../assets/Image/github-icon.svg"
              height="30px"
              alt="Ícone do instagram"
            />
          </Link>
        </Flex>
      </Box>
    </>
  );
}

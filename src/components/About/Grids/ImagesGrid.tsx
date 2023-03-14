import { Box, Image } from "@chakra-ui/react";

export default function ImagesGrid() {
  return (
    <Box
      margin={["4px", "4px", "4px", "4px", "4px"]}
      padding={[
        "16px 24px 0 0",
        "16px 24px 0 0",
        "16px 24px 0 0",
        "16px 24px 0 0",
        "16px 24px 0 0",
      ]}
      float="left"
      width="470px"
    >
    <Box position="relative" overflow="hidden" transform="translate(0px, 0px)" opacity="1">
        <Box position="absolute" top="0" left="0" width="100%" height="35px" zIndex="200" background="linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%), linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%), linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%)" transform="translate(0px, 0px)" opacity="1" />
          <Image
            width="100%"
            objectFit="cover"
            src="/assets/Image/PhotoAbout.svg"
            alt="Foto exclusiva do Moises Cruz Braga"
          />
          <Box position="absolute" bottom="0" left="0" width="100%" height="35px" zIndex="200" background="linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%), linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%), linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%)" transform="rotate(180deg) skew(360deg, 0deg)" opacity="1" />
    </Box>
    </Box>
  );
}

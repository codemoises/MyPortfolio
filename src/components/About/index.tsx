import { Box, Flex } from "@chakra-ui/react";
import { AboutGrid } from "../AboutGrid";
import ImagesGrid from "../AboutImage";

export function About() {
  return (
    <>
      <Box 
        id="about"
        margin="0 auto"
        maxWidth="1200px"
        padding={[
          "96px 0px 96px 0px",
          "96px 8px 96px 8px",
          "96px 24px 96px 24px",
          "96px 16px 96px 16px",
          "96px 16px 96px 16px",
          "96px 16px 96px 16px",
      ]}>
        <Flex 
          alignItems="center" 
          justifyContent="space-between" 
          flexDirection={[
            "column", 
            "column", 
            "column", 
            "column", 
            "row"
            ]}>
            <AboutGrid />
            <ImagesGrid />
        </Flex>
      </Box>
    </>
  );
};

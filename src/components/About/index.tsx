import { Box, Flex } from "@chakra-ui/react";
import { AboutGrid } from "../AboutGrid";
import ImagesGrid from "../AboutImage";

export function About() {
  return (
    <>
      <Box id="about" margin="0 auto"
    maxWidth="1200px"
    height="100vh"
    padding={[
      "132px 0px 32px 0px",
      "132px 8px 32px 8px",
      "0 24px 32px 24px",
      "0 24px 32px 24px",
      "0 8px 32px 8px",
      "0 16px",
    ]}>
        <Flex alignItems="center" justifyContent="space-between" flexDirection={["column", "column", "column", "column", "row"]}>
          <AboutGrid />
          <ImagesGrid />
        </Flex>
      </Box>
    </>
  );
}

import { Box, Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container"
import { AboutGrid } from "../AboutGrid";
import ImagesGrid from "../AboutImage";

export function About() {
  return (
    <>
      <Container id="about">
        <Flex alignItems="center" justifyContent="" flexDirection={["column", "column", "column", "column", "row"]} padding="0 20px">
          <AboutGrid />
            <Box width="calc(8.33333% - 8px)" margin="4px" padding="16px 0" float="left" />
          <ImagesGrid />
        </Flex>
      </Container>
    </>
  );
}

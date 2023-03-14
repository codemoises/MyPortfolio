import { Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container"
import { AboutGrid } from "./Grids/AboutGrid";
import ImagesGrid from "./Grids/ImagesGrid";

export function ContentAbout() {
  return (
    <>
      <Container display={"flex"} alignItems={"center"}>
        <Flex alignItems="center" justifyContent="space-between" padding="0 20px">
          <AboutGrid />
          <ImagesGrid />
        </Flex>
      </Container>
    </>
  );
}

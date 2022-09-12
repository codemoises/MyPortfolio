import { Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container"
import { TextContent } from "../Common/DefaultText"
import { AboutGrid } from "./Grids/AboutGrid";

export function ContentAbout() {
  return (
    <>
      <Container display={""} alignItems={""}>
        <AboutGrid />
      </Container>
    </>
  );
}

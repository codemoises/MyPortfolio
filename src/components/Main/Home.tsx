import { Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container";
import { GridOne } from "./Grids/GridOne/GridOne";
import { GridTwo } from "./Grids/GridTwo/GridTwo";

export function Home() {
  return (
    <Container display="flex" alignItems="center" id={"inicio"} height={"100vh"}>
      <Flex
        height={'auto'}
        flexDirection={[
          "column",
          "column",
          "column",
          "column",
          "column",
          "row",
        ]}
        alignItems={[
          "center",
          "flex-start",
          "flex-start",
          "flex-start",
          "flex-start",
          "center",
        ]}
        justifyContent={["start", "start", "start", "start", "start", "center"]}
        background="transparent"
      >
        <GridOne />
        <GridTwo />
      </Flex>
    </Container>
  );
}

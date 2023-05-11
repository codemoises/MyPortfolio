import { Box, Flex } from "@chakra-ui/react";
import { GridOne } from "./Grids/GridOne/GridOne";
import { GridTwo } from "./Grids/GridTwo/GridTwo";

export function Home() {
  return (
    <Box
      margin="0 auto"
      maxWidth="1440px"
      height={["auto", "auto", "auto", "auto", "auto", "100vh"]}
      padding={[
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "157px 16px 96px",
      ]}
      display="flex"
      alignItems="center"
      id={"inicio"}
    >
      <Flex
        height={"auto"}
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
    </Box>
  );
}

import { Box } from "@chakra-ui/react";
import { TextContent, TextContentTwo } from "../../../Common/DefaultText";

export function GridOne() {
  return (
    <>
      <Box
        width= ""
        margin={[
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 22px",
          "4px 4px 4px 4px",
        ]}
        padding="16px 0"
      >
        <TextContent text="Olá, eu sou o"></TextContent>
        <TextContentTwo text="Moises Cruz"></TextContentTwo>
        <TextContent padding="25px 0 0 25px" text="Front-End"></TextContent>
        <TextContent padding="25px 0 0 0" text="developer"></TextContent>
      </Box>
    </>
  );
}

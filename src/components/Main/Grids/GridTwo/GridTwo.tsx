import { Box } from "@chakra-ui/react";
import { Local, PhraseSix, PhraseFive } from "../../Variation";

export function GridTwo() {
  return (
    <>
      <Box margin="72px 4px" padding="16px 0">
        <PhraseFive />
        <PhraseSix />
        <Local />
      </Box>
    </>
  );
}

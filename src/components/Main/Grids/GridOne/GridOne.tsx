import { Box } from "@chakra-ui/react";
import { PhraseFour, PhraseOne, PhraseThree, PhraseTwo } from "../../phraseVariation";

export function GridOne() {
  return (
    <>
      <Box margin="4px 4px 4px 4px" padding="16px 0">
        <PhraseOne />
        <PhraseTwo />
        <PhraseThree />
        <PhraseFour />

      </Box>
    </>
  );
}

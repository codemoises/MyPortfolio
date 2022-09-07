import { Box } from "@chakra-ui/react";
import { PhraseFour, PhraseOne, PhraseThree, PhraseTwo } from "../../Variation";

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
        <PhraseOne />
        <PhraseTwo />
        <PhraseThree />
        <PhraseFour />
      </Box>
    </>
  );
}

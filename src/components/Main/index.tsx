import { Box } from "@chakra-ui/react";
import { MainContent } from "../MainContent";

export function Home() {
  return (
    <Box
      margin="0 auto"
      maxWidth="1200px"
      height={["auto", "auto", "auto", "auto", "auto", "auto"]}
      padding={[
        "229px 0px 32px 0px",
        "219px 0px 32px 0px",
        "172px 8px 32px 8px",
        "182px 8px 32px 8px",
        "157px 8px 32px 8px",
        "157px 16px 96px",
      ]}
      alignItems="center"
      id={"inicio"}
    >
        <MainContent />
    </Box>
  );
}

import { Box } from "@chakra-ui/react";
import { MainContent } from "../MainContent";
import Projects from "../Projects";

export function Home() {
  return (
    <Box
      margin="0 auto"
      maxWidth="1440px"
      height={["auto", "auto", "auto", "auto", "auto", "auto"]}
      padding={[
        "229px 8px 32px 8px",
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "157px 16px 96px",
      ]}
      alignItems="center"
      id={"inicio"}
    >
        <MainContent />
    </Box>
  );
}

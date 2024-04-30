import { Box } from "@chakra-ui/react";
import { MainContent } from "../MainContent";
import { Header } from "../Header";

export function Home() {
  return (
    <Box
      display={"flex"}
      justifyContent={[
        "flex-start",
        "flex-start",
        "flex-start",
        "center",
        "center",
      ]}
      alignItems={"center"}
      flexDirection={"column"}
      margin={"0 auto"}
      maxWidth={"1200px"}
      height={["auto", "auto", "auto", "100vh", "100vh"]}
      id={"inicio"}
    >
      <Header />
      <MainContent />
    </Box>
  );
}

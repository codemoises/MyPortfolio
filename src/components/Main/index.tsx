import { Box } from "@chakra-ui/react";
import { MainContent } from "../MainContent";
import { Header } from "../Header";
import { ImageComponent } from "../ImageComponent";

export function Home() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      margin={"0 auto"}
      maxWidth={"1200px"}
      height={"100vh"}
      id={"inicio"}
    >
      <Header />
      <MainContent />
    </Box>
  );
};

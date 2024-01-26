import { Box } from "@chakra-ui/react";
import { Logo } from "../Common/Logo";

export function Header() {
  return (
    <Box
      position={["relative", "relative", "relative", "relative", "absolute"]}
      top={"0"}
      width={"100%"}
      zIndex={"1000"}
    >
      <Box
        margin={["36px auto", "10px auto"]}
        maxWidth={"1200px"}
        padding={["25px 10px"]}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Logo />
      </Box>
    </Box>
  );
};

import { Box } from "@chakra-ui/react";
import { Logo } from "../Common/Logo";

export function Header() {
  return (
    <Box
      width="100%"
      bgGradient={["linear(180deg, #050607 0%, #05060700 100%)"]}
      position="fixed"
      zIndex="1000"
    >
      <Box
        margin="10px auto"
        maxWidth="1200px"
        padding="10px 10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Logo />
      </Box>
    </Box>
  );
};

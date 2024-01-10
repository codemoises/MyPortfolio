import { Box } from "@chakra-ui/react";

export default function AnimateFile() {
  return (
    <Box
      className="blink"
      fontSize={["20px", "30px", "30px", "40px", "40px", "50px"]}
      display="inline-block"
    >
      <span>|</span>
    </Box>
  );
}

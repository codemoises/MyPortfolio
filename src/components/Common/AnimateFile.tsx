import { Box } from "@chakra-ui/react";

export default function AnimateFile() {
  return (
    <Box
      className="blink"
      fontSize={["14px", "15px", "16px", "18px", "19px", "20px"]}
    >
      <span>|</span>
    </Box>
  );
}

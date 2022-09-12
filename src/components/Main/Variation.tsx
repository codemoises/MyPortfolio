import { Box, Flex, Text } from "@chakra-ui/react";
import { IconCheckIn } from "../Common/IconCheckIn";

export function Local() {
  return (
    <Box
      paddingTop={["20px", "20px", "20px", "20px", "20px", "10px"]}
      margin="0 8px 0 8px"
    >
      <Flex alignItems="center">
        <IconCheckIn />
        <Text
          fontSize="16px"
          lineHeight="140%"
          fontWeight="100"
          paddingLeft="12px"
        >
          Ceará, Brasil
        </Text>
      </Flex>
    </Box>
  );
}

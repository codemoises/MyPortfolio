import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  display: string;
  alignItems: string;
  children?: ReactNode;
  height: string;
  id: string;
}

export function Container({
  display,
  alignItems,
  id,
  children,
  height
}: ContainerProps) {
  return (
    <Box
      display={display}
      alignItems={alignItems}
      id={id}
      height={height}
      margin="0 auto"
      maxWidth="1440px"
      padding={[
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "132px 8px 32px 8px",
        "157px 16px 96px",
      ]}
    >
      {children}
    </Box>
  );
}

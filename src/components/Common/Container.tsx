import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";


interface ContainerProps {
    display: string;
    alignItems: string;
    children?: ReactNode;
  }

export function Container({display, alignItems, children, ...rest}: ContainerProps) {
  return (
    <Box
      display={display}
      alignItems={alignItems}
      height={["auto", "auto", "auto", "auto", "auto", "100vh"]}
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
      {...rest}
    >
    {children}
    </Box>
  );
}

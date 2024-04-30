import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  display?: string;
  alignItems?: string;
  children?: ReactNode;
  id: string;
}

export function Container({
  display,
  alignItems,
  id,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Box
      display={display}
      alignItems={alignItems}
      id={id}
      margin={"0 auto"}
      maxWidth={"1200px"}
      padding={[
        "132px 0px 32px 0px",
        "132px 0px 32px 0px",
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

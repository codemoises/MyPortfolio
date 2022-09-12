import { Text } from "@chakra-ui/react"
import { ReactNode } from "react";

interface TextProps {
    color: string;
    fontFamily: string;
    FontSize: string;
    children?: ReactNode;

  }
  
export function Variation({children}: TextProps) {
    return (
        <Text >
            sobre mim
            {children}
        </Text>
    );
}
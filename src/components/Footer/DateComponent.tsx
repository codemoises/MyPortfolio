import { Text } from "@chakra-ui/react";

let year = new Date().getFullYear();

export default function DateComponent() {
    return (
        <Text>
         {year}
        </Text>
    );
}

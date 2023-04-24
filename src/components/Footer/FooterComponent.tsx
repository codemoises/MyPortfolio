import { Box, Link, Flex, Text } from "@chakra-ui/react";
import DateComponent from "./DateComponent";


export default function FooterComponent() {
    return (
        <Flex width={"100%"} justifyContent={"center"} alignItems={"center"} height={"60px"} borderTop={"1px solid #282c31"} textAlign={"center"}>
            <Box fontSize={"12px"} fontFamily={"Open Sans, sans-serif;"} color={"#c9c9c9"} display={"flex"} gap={"3px"}>
                ©
                <DateComponent />
                <Link href="http://github.com/mwises" _hover={{textDecoration: "none"}}>
                    Moises Cruz
                </Link>
            </Box>
        </Flex>
    );
}
import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "../Common/Logo";
import { NavigationOption } from "../Common/NavigationOption";
import { Text } from "../Common/DefaultText";

export function Menu() {
    return (
        <Box width="100%" bgGradient={["linear(180deg, #050607 0%, #05060700 100%)"]} height="94px">
            <Box margin="0 auto" maxWidth="1200px" padding="8px 0">
                <Flex justifyContent="space-between" alignItems="center">
                    <Logo />
                    <Flex width="445px" justifyContent="space-around">
                        <NavBarItems />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

const NavBarItems = () => {
    return (
        <>
            <NavigationOption link={"/home"}>
                <Text text={"Início"}></Text>
            </NavigationOption>
            <NavigationOption link={"/about"}>
                <Text text={"Sobre"}></Text>
            </NavigationOption>
            <NavigationOption link={"/services"}>
                <Text text={"Serviços"}></Text>
            </NavigationOption>
            <NavigationOption link={"/acquirements"}>
                <Text text={"Conhecimentos"}></Text>
            </NavigationOption>
        </>
    );
}
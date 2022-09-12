import { Box } from "@chakra-ui/react";
import { Logo } from "../Common/Logo";
import { NavigationOption } from "../Common/NavigationOption";
import { Text } from "../Common/DefaultText";

export function Menu() {
  return (
    <Box
      width="100%"
      bgGradient={["linear(180deg, #050607 0%, #05060700 100%)"]}
      position="fixed"
    >
      <Box
        margin="10px auto"
        maxWidth="1200px"
        padding="10px 10px"
        display="flex"
        justifyContent={[
          "center",
          "center",
          "center",
          "center",
          "space-between",
        ]}
        alignItems="center"
      >
        <Logo />
        <Box
          width="445px"
          display={["none", "none", "none", "none", "flex"]}
          justifyContent="space-around"
        >
          <NavBarItems />
        </Box>
      </Box>
    </Box>
  );
}

const NavBarItems = () => {
  return (
    <>
      <NavigationOption link={"#main"}>
        <Text text={"Início"}></Text>
      </NavigationOption>
      <NavigationOption link={"#about"}>
        <Text text={"Sobre"}></Text>
      </NavigationOption>
      <NavigationOption link={"#projects"}>
        <Text text={"Projetos"}></Text>
      </NavigationOption>
      <NavigationOption link={"#skills"}>
        <Text text={"Conhecimentos"}></Text>
      </NavigationOption>
    </>
  );
};

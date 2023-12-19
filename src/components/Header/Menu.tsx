import { Box } from "@chakra-ui/react";
import { Logo } from "../Common/Logo";
import { NavigationOption } from "../Common/NavigationOption";

export function Menu() {
  return (
    <Box
      width="100%"
      bgGradient={["linear(180deg, #050607 0%, #05060700 100%)"]}
      position="fixed"
      zIndex="1000"
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

        <NavBarItemsFirst />
        <Logo />
        <NavBarItemsSecond />
      </Box>
    </Box>
  );
}

const NavBarItemsFirst = () => {
  return (
    <>
      <NavigationOption link={"/"} display={["none", "none", "none", "none", "flex"]}>
        Início
      </NavigationOption>
      <NavigationOption link={"#about"} display={["none", "none", "none", "none", "flex"]}>
        Sobre
      </NavigationOption>
    </>
  );
};

const NavBarItemsSecond = () => {
  return (
    <>
      <NavigationOption link={"#skills"} display={["none", "none", "none", "none", "flex"]}>
        Conhecimentos
      </NavigationOption>
      <NavigationOption link={"#projects"} display={["none", "none", "none", "none", "flex"]}>
        Projetos
      </NavigationOption>
    </>
  );
};
import { Image } from "@chakra-ui/react";

export function Logo() {
    return (
        <Image
        src={"/assets/logo/moisesLogo.svg"}
        alt="Logo do Moises"
        width={"80px"}
        height={"80px"}
        />
    );
}
import { Image } from "@chakra-ui/react";

export function Logo() {
    return (
        <Image
        src={"/assets/Image/Logo.svg"}
        alt="Logo do Moises"
        width={"90px"}
        height={"90px"}
        />
    );
}
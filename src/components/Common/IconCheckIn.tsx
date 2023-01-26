import { Image } from "@chakra-ui/react";

export function IconCheckIn() {
    return (
        <Image 
            src="/assets/Image/check-icon.svg"
            alt="Ícone check in"
            transition="all 0.5s ease-in-out"
             _hover={{ transform: "translate(0, -10px)" }} />
  );
}

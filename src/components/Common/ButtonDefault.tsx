import { Button, Link } from "@chakra-ui/react";

interface ButtonProps {
  placeholder: string;
  href: string;
  bg?: boolean;
}

export default function ButtonDefault({ placeholder, href, bg }: ButtonProps) {
  return (
    <Link href={href} _hover={{}}>
      <Button
        width={["100%", "auto", "auto", "auto", "auto"]}
        padding={"12px 32px"}
        height={"52px"}
        fontFamily={"Saira, sans-serif"}
        fontWeight={"500"}
        fontSize={"18px"}
        color={bg ? "#f4f4f4" : "#8446E7"}
        borderRadius={"0"}
        border={"1px solid rgba(103, 16, 242, 0.651)"}
        bg={  
          bg
            ? "linear-gradient(225deg, rgba(103, 16, 242, 0.322) 0%, rgba(103, 16, 242, 0.048) 100%)"
            : "none"
        }
        _hover={
          bg
            ? {
                bg: "linear-gradient(225deg, rgba(103, 16, 242, 0.575) 0%, rgba(103, 16, 242, 0.13) 100%)",
                border: "1px solid rgba(103, 16, 242, 0.651)",
              }
            : {
                bg: "linear-gradient(225deg, rgba(103, 16, 242, 0.322) 0%, rgba(103, 16, 242, 0.048) 100%)",
                border: "1px solid rgba(103, 16, 242, 0.651)",
                color: "#f4f4f4",
              }
        }
        _active={{}}
      >
        {placeholder}
      </Button>
    </Link>
  );
}

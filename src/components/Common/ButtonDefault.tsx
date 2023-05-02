import { Button, Link } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

interface ButtonProps {
  placeholder: string;
  href: string;
}

export default function ButtonDefault({ placeholder, href }: ButtonProps) {
  return (
    <Link href={href} _hover={{}}>
      <Button
        width={"194px"}
        height={"40px"}
        margin={"32px 0"}
        rightIcon={<ArrowDownIcon />}
        fontFamily={"sans-serif"}
        fontSize={"15px"}
        color={"#f4f4f4"}
        borderRadius={"0"}
        border="1px solid rgba(103, 16, 242, 0.651)"
        bg={
          "linear-gradient(225deg, rgba(103, 16, 242, 0.322) 0%, rgba(103, 16, 242, 0.048) 100%)"
        }
        _hover={{
          bg: "linear-gradient(225deg, rgba(103, 16, 242, 0.575) 0%, rgba(103, 16, 242, 0.13) 100%)",
          border: "1px solid rgba(103, 16, 242, 0.651)",
        }}
        _active={{}}
      >
        {placeholder}
      </Button>
    </Link>
  );
}

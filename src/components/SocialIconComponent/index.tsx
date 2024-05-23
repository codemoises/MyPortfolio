import { Flex, Link } from "@chakra-ui/react";
import { ImageComponent } from "../ImageComponent";
import React from "react";

export type SocialIconComponentProps = {
  href: string;
  src: string;
  alt: string;
  social: string;
};

export default function SocialIconComponent({
  src,
  alt,
  href,
  social,
}: SocialIconComponentProps) {
  return (
    <Flex
      className={"social-content"}
      margin={"16px"}
      alignItems={"center"}
      transition={"all 0.5s ease-in-out"}
      _hover={{ transform: "translate(0, -10px)" }}
    >
      <ImageComponent src={src} alt={alt} height={["32px", "32px", "32px", "32px", "28px"]} />
      <Link
        fontSize={["18px", "18px", "18px", "18px", "16px"]}
        href={href}
        target={"_blank"}
        rel={"external"}
        margin={"0 14px"}
        transition={"all 0.5s ease-in-out"}
        _hover={{}}
      >
        {social}
      </Link>
      <ImageComponent
        src={"/assets/icons/arrow.svg"}
        alt={"Ícone de arrow"}
        height={["30px", "30px", "30px", "30px", "26px"]}
      />
    </Flex>
  );
}

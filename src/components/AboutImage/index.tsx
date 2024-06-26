import { Box } from "@chakra-ui/react";
import { ImageComponent } from "../ImageComponent";

export default function ImagesGrid() {
  return (
    <Box
      margin={["4px", "4px", "4px", "4px", "4px"]}
      padding={["4px", "8px", "16px", "16px 24px 0 0", "16px 24px 0 0"]}
      float="left"
      width={["auto", "470px"]}
      display={["none", "none", "none", "none", "block"]}
    >
      <Box
        position={"relative"}
        transform={"translate(0px, 0px)"}
        opacity={"1"}
      >
        <Box
          position={"absolute"}
          top={"0"}
          left={"0"}
          width={"100%"}
          height={"35px"}
          zIndex={"200"}
          background={
            "linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%), linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%), linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%)"
          }
          transform={"translate(0px, 0px)"}
          opacity={"1"}
        />
        <ImageComponent
          src={"/assets/images/PhotoAbout.svg"}
          alt={"Foto exclusiva do Moises Cruz Braga"}
          width={"100%"}
        />
        <Box
          position={"absolute"}
          bottom={"0"}
          left={"0"}
          width={"100%"}
          height={"35px"}
          zIndex={"200"}
          background={
            "linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%), linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%), linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%)"
          }
          transform={"rotate(180deg)"}
          opacity="1"
        />
      </Box>
    </Box>
  );
}

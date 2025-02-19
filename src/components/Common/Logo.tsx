import { ImageComponent } from "../ImageComponent";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export function Logo() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <ImageComponent
            src={"/assets/images/Logo.svg"}
            alt={"Logo do Moises"}
            width={"90px"}
            height={["90px"]}
          />
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

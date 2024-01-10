import { ImageComponent } from "../ImageComponent";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export function Logo() {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href="#">
                    <ImageComponent
                    src={"/assets/Image/Logo.svg"}
                    alt="Logo do Moises"    
                    width={"95px"}
                    height={"95px"}
                    />
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}
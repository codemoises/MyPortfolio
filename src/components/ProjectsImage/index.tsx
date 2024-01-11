import { Box } from "@chakra-ui/react";
import { ImageComponent } from "../ImageComponent";
interface ImageContentProps {
    src: string;
    alt: string;
}

export default function ProjectsImage({src, alt}: ImageContentProps) {
    return (
        <Box display={"flex"} justifyContent={"center"} maxWidth={"384px"} maxHeight={"300px"}>
            <Box w={"100%"} h={"100%"} 
             margin={["0", "0", "0px 8px 0 0px", "0px 8px 0 0px", "0px 8px 0 0px"]}
             padding={["0", "0", "0px 8px 0 0px", "0px 8px 0 0px", "0px 8px 0 0px"]}>
                <ImageComponent width="100%" height="100%" src={src} alt={alt} />
            </Box>
        </Box>
    );
}




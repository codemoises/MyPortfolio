import { Box } from "@chakra-ui/react";
import { ImageComponent } from "../ImageComponent";
interface ImageContentProps {
    src: string;
    alt: string;
}

export default function ProjectsImage({src, alt}: ImageContentProps) {
    return (
        <Box 
            display={"flex"} 
            justifyContent={"center"} 
            maxWidth={["330px", "230px"]} 
        >
            <Box
              w={"100%"} 
              h={"100%"}
              overflow={"hidden"}
            >
                <Box 
                  transition={"all 500ms ease-in-out"}
                  _hover={{ transform: "translate(-3%, 3%) scale(1.2) rotate(5deg)" }}>
                    <ImageComponent width="100%" height="100%" src={src} alt={alt} />
                </Box>
            </Box>
        </Box>
    );
};




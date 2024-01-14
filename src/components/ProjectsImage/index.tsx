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
            margin={[
                "0", "0", "0px 8px 0 0px", 
                "0px 8px 0 0px", 
                "0px 8px 0 0px"]} 
             padding={[
                "0", 
                "0", 
                "0px 8px 0 0px", 
                "0px 8px 0 0px", 
                "0px 8px 0 0px"]} 
            maxWidth={"384px"} 
            maxHeight={"300px"}
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




import { Box } from "@chakra-ui/react";
import { ImageComponent } from "../ImageComponent";
interface ImageContentProps {
  src: string;
  alt: string;
}

export default function ProjectsImage({ src, alt }: ImageContentProps) {
  return (
    <Box display={"flex"} justifyContent={"center"} maxWidth={["330px"]}>
      <Box w={"100%"} h={"100%"} overflow={"hidden"}>
        <Box
          className="project-animation"
          transition={"all 500ms ease-in-out"}
        >
          <ImageComponent width="100%" height={["100%"]} src={src} alt={alt} />
        </Box>
      </Box>
    </Box>
  );
}

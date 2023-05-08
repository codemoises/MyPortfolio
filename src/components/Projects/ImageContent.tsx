import { Box, Image } from "@chakra-ui/react";


interface ImageContentProps {
    src: string;
    alt: string;
}

export default function ImageContent({src, alt}: ImageContentProps) {
    return (
        <Box display={["none", "none", "block", "block"]} w={"384px"} h={"300px"}>
            <Box w={"100%"} h={"100%"}>
                    <Image width="100%" height="100%" src={src} alt={alt} />
            </Box>
        </Box>
    );
}




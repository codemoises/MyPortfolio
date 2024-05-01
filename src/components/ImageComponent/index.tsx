import { Image } from "@chakra-ui/react";

interface imageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string[];
}

export function ImageComponent({
  src,
  alt,
  width,
  height,
  ...rest
}: imageProps) {
  return <Image src={src} alt={alt} width={width} height={height} {...rest} />;
}

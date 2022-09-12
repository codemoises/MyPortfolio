import { Flex } from "@chakra-ui/react";
import { Container } from "../Common/Container"
import { TextContent } from "../Common/DefaultText"

export function ContentAbout() {
  return (
    <>
      <Container display={""} alignItems={""}>
        <Flex>
          <TextContent text={"Sobre mim"}>
            
          </TextContent>
        </Flex>
      </Container>
    </>
  );
}

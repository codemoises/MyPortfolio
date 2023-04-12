import { Box } from "@chakra-ui/react";
import { TextContentThree } from "../../../Common/DefaultText";
import ButtonDefault from "../../../Common/ButtonDefault";


export function GridTwo() {
  return (
    <>
      <Box
        margin={[
          "50px 22px",
          "50px 22px",
          "50px 22px",
          "50px 22px",
          "50px 22px",
          "72px 4px",
        ]}
        padding="16px 0"
      >
        <TextContentThree text={"Estudante de Análise e Desenvolvimento de Sistemas"} />
        <TextContentThree text={"e paixão por desenvolvimento web."} />
        <ButtonDefault placeholder={"Mais sobre mim"} />
      </Box>
    </>
  );
}

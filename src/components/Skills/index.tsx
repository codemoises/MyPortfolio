/* eslint-disable react/no-children-prop */
import { Box, Flex, Grid } from "@chakra-ui/react";
import { TextContent } from "../Common/DefaultText";
import SkillsCard from "../SkillsCard";

export default function ContentSkills() {
  return (
    <Box
      id={"skills"}
      margin="0 auto"
      maxWidth="1200px"
      padding={[
        "42px 8px 64px 8px",
        "42px 25px 64px 25px",
        "42px 25px 64px 25px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
        "96px 16px 96px 16px",
      ]}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"38px"}>
        <Box padding={["0 0 0 10px", "0 0 0 10px", 0, 0, 0]}>
          <TextContent
            fontFamily={"'Inter', serif"}
            textAlign={"center"}
            fontWeight={"400"}
            fontSize={["18px", "18px", "18px", "18px", "20px", "20px"]}
            children={"Ferramentas que uso atualmente."}
          />
          <TextContent
            fontFamily={"'Inter', serif"}
            color={"#a1a1aa"}
            textAlign={"center"}
            fontWeight={"400"}
            fontSize={["18px", "18px", "18px", "18px", "20px", "20px"]}
            children={"Tenho usado em todos os meus trabalhos recentes."}
          />
        </Box>
        <Grid templateColumns={"repeat(4, 1fr)"}>
          <SkillsCard
            src="/assets/icons/javascript.svg"
            alt="imagem logo do javaScript"
          />
          <SkillsCard
            src="/assets/icons/typescript.svg"
            alt="Imagem logo do typeScript"
          />
          <SkillsCard
            src="/assets/icons/node.svg"
            alt="Imagem logo do Node"
          />
          <SkillsCard
            src="/assets/icons/react.svg"
            alt="imagem logo do reactJS"
          />
          <SkillsCard
            src="/assets/icons/next.svg"
            alt="imagem logo do next"
          />
          <SkillsCard
            altWidth
            altAnimation
            src="/assets/icons/styled-components.svg"
            alt="imagem logo do styled-components"
          />
          <SkillsCard
            src="/assets/icons/html5.svg"
            alt="imagem logo do html5"
          />
          <SkillsCard
            src="/assets/icons/css3.svg"
            alt="imagem logo do CSS3"
          />
        </Grid>
      </Box>
    </Box>
  );
}

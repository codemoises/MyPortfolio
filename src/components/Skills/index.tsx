import { Box, Flex } from "@chakra-ui/react";
import { TextContent } from "../Common/DefaultText";
import SkillsCard from "../SkillsCard";

export default function ContentSkills() {
  return (
    <Box id={"skills"} margin="0 auto"
    maxWidth="1200px"
    padding={[
      "132px 0px 32px 8px",
      "132px 8px 45px 8px",
      "96px 24px 45px 24px",
      "96px 24px 157px 24px",
      "96px 8px 157px 24px",
      "96px 16px 157px 16px",
    ]}>
      <Box marginTop={["0", "0", "24px"]}>
        <Box padding={["0 0 0 10px", "0 0 0 10px", 0, 0, 0]}>
          <TextContent fontSize={["18px", "18px", "18px", "18px", "19px", "20px"]} text={"Conhecimentos"} />
        </Box>
        <Flex maxWidth={"588px"} flexWrap={"wrap"}  gap={["32px", "65px", "28px", "28px", "28px"]} padding={["12px 8px 0 8px", "16px 0 0 0", "16px 0 0 0", "16px 0 0 0", "16px 0 0 25px"]}>
          <SkillsCard
            img={"/assets/Image/javascript.svg"}
            alt={"Logo do JavaScript"}        />
          <SkillsCard
            img={"assets/Image/typescript.svg"}
            alt={"Logo do TypeScript"}
          />
          <SkillsCard
            img={"assets/Image/react.svg"}
            alt={"Logo do react"}
          />
          <SkillsCard
            img={"assets/Image/next.svg"}
            alt={"Logo do next"}
          />
          <SkillsCard
            img={"assets/Image/html5.svg"}
            alt={"Logo do html5"}
          />
          <SkillsCard
            img={"assets/Image/css3.svg"}
            alt={"Logo do css3"}
          />
        </Flex>
      </Box>
    </Box>
  );
}

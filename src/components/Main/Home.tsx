import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { GridOne } from "./Grids/GridOne/GridOne";
import { GridTwo } from "./Grids/GridTwo/GridTwo";

export function Home() {
  return (
    <>
      <Box>
        <Flex
          maxWidth="1440px"
          height="100vh"
          margin="0 auto"
          padding="96px 16px"
          flexDirection="row"
          alignItems="center"
        >
          <GridOne />
          <GridTwo />
        </Flex>
      </Box>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias
        ratione nobis excepturi? Neque vel, itaque similique amet dignissimos
        architecto totam deleniti ducimus facere quo officia, ipsam provident
        inventore reprehenderit?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga distinctio nulla qui quibusdam eum quaerat sed
        debitis quis dolores veniam eveniet, ex omnis doloribus excepturi quod
        et voluptates nam cumque!Loremlore Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Modi quidem dignissimos autem delectus nam
        quo sint placeat laboriosam doloribus pariatur atque eum culpa, quasi
        aperiam quam dicta voluptates vero! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consequatur molestias, a tempora facilis
        labore sed dignissimos pariatur unde adipisci maiores quae dolorem, sunt
        reiciendis expedita neque. Quas eius ducimus dicta? Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Blanditiis consectetur vitae
        iusto vero fugiat dolor dolorem modi, dolores assumenda mollitia,
        doloribus eaque laudantium sint tenetur nemo ea, eligendi asperiores
        atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        labore atque optio minus ducimus, temporibus itaque perspiciatis veniam
        quos earum exercitationem aperiam praesentium error et ullam
        voluptatibus deleniti at alias? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Accusamus, placeat possimus doloremque, quam
        reiciendis necessitatibus delectus, veritatis porro nihil esse quia
        earum odio. Corporis reprehenderit officia deleniti modi excepturi
        accusamus?
      </Text>
    </>
  );
}

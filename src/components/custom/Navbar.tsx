import { Box } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Box w="100%" p="4" color="white">
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "left" }}
          flexDir="row"
          gap={5}
        >
          <Image src="AnthonyLogo.svg" width={{ base: 75, md: 50 }} />

          <Text fontSize={25} display={{ base: "none", md: "block" }}>
            Anthony's Writing
          </Text>
        </Box>
        <hr />
      </Box>
    </div>
  );
};

export default Navbar;

import { Box, Flex } from "@chakra-ui/react";
import { Image, Text, IconButton } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
import { LuSun, LuMoon } from "react-icons/lu";
const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <div>
      <Box w="100%" p="4" color="white">
        <Flex
          alignItems="center"
          justifyContent={{ base: "center", md: "left" }}
          flexDir="row"
          gap={5}
        >
          <Image src="AnthonyLogo.svg" width={{ base: 75, md: 50 }} />

          <Text
            fontSize={25}
            display={{ base: "none", md: "block" }}
            color={useColorModeValue("#000000", "#FFFFFF")}
          >
            Anthony's Writing
          </Text>
          <IconButton
            marginLeft={"auto"}
            variant={"outline"}
            onClick={toggleColorMode}
            bottom={2}
          >
            {useColorModeValue(<LuSun />, <LuMoon />)}
          </IconButton>
        </Flex>
        <hr />
      </Box>
    </div>
  );
};

export default Navbar;

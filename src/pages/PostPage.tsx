import { useColorModeValue } from "@/components/ui/color-mode";
import Post from "@/types/Post";
import { Button, Flex, Text } from "@chakra-ui/react";
import { LuArrowLeft, LuHeart } from "react-icons/lu";
import { Link } from "react-router-dom";

interface Props {
  PostData: Post;
}

const PostPage = (props: Props) => {
  return (
    <Flex
      flex="1"
      bg={useColorModeValue("rgba(193, 193, 193, 0.5)", "rgba(255,255,255,.1)")}
      width={{ base: "10/12", md: "1/2" }}
      margin={"auto"}
      borderRadius={"xl"}
      flexDir={"column"}
      marginBottom={10}
      borderColor={useColorModeValue("gray.400", "gray.500")}
      borderWidth={2}
    >
      <Flex
        w="full"
        borderTopRadius={"xl"}
        h="10%"
        bg={useColorModeValue(
          "rgba(193, 193, 193, 0.5)",
          "rgba(255,255,255,.1)"
        )}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize="5xl" truncate>
          {props.PostData.title}
        </Text>
      </Flex>
      <Flex
        w="full"
        h="7.5%"
        bg={useColorModeValue(
          "rgba(193, 193, 193, 0.25)",
          "rgba(255,255,255,.05)"
        )}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"left"}
        paddingLeft={10}
        gap={10}
      >
        {props.PostData.likes.includes(123) ? (
          <Button colorPalette={"red"}>
            <LuHeart fill="white" /> {props.PostData.likes.length}
          </Button>
        ) : (
          <Button variant="ghost">
            <LuHeart /> {props.PostData.likes.length}
          </Button>
        )}
      </Flex>
      <Flex flex="1" justifyContent={"center"}>
        <Text w="11/12" mt="10" mb="5" textAlign={"left"} verticalAlign={"top"}>
          {props.PostData.text}
        </Text>
      </Flex>

      <Link to="/">
        <Button position={"absolute"} top="10%" left="2%">
          <LuArrowLeft /> Back to Homepage
        </Button>
      </Link>
    </Flex>
  );
};

export default PostPage;

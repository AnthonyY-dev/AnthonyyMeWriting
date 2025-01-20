import Post from "@/types/Post";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface Props {
  PostData: Post;
}

const PostCard = (props: Props) => {
  return (
    <Flex
      borderColor={useColorModeValue("gray.200", "gray-800")}
      borderWidth="1px"
      borderRadius="xl"
      aspectRatio={1}
      flexDir={"column"}
    >
      <Box
        bg="rgba(255,255,255,0.1)"
        width="full"
        height="1/5"
        borderTopRadius="xl"
        backdropFilter="blur(10px)"
        boxShadow="lg"
        // border="1px solid rgba(255, 255, 255, 0.2)"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text truncate fontSize={20} lineClamp={2} fontWeight={800}>
          {props.PostData.title}
        </Text>
      </Box>
      <Box
        bg="rgba(164, 164, 164, 0.1)"
        flex={1}
        backdropFilter="blur(10px)"
        boxShadow="lg"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={5}
      >
        <Text truncate fontSize={20} lineClamp={6} textAlign={"center"}>
          {props.PostData.text}
        </Text>
      </Box>
      <Box
        bg="rgba(255,255,255,0.1)"
        width="full"
        height="1/6"
        borderBottomRadius="xl"
        backdropFilter="blur(10px)"
        boxShadow="lg"
        // border="1px solid rgba(255, 255, 255, 0.2)"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text truncate fontSize={20} lineClamp={2}>
          Footer
        </Text>
      </Box>
    </Flex>
  );
};

export default PostCard;

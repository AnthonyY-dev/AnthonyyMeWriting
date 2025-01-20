import PostCard from "@/components/custom/PostCard";
import Post from "@/types/Post";
import { Flex, SimpleGrid } from "@chakra-ui/react";

interface Props {
  Posts: Post[];
}

const Homepage = (props: Props) => {
  const mLR = { base: "7%", lg: "3%" };

  return (
    <Flex flex="1">
      <SimpleGrid
        w="full"
        h="full"
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap="50px" // Ensures both row and column gaps are consistently 10px
        marginLeft={mLR}
        marginRight={mLR}
      >
        {props.Posts.map((post) => (
          <PostCard PostData={post}></PostCard>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Homepage;

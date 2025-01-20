import Post from "@/types/Post";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, For, Stack } from "@chakra-ui/react";
import { LuText } from "react-icons/lu";
interface Props {
  PostData: Post;
}

const PostCard = (props: Props) => {
  return (
    <Card.Root>
      <Card.Body gap="2">
        {props.PostData.imageUrl ? (
          <Avatar
            src={props.PostData.imageUrl}
            name={props.PostData.title}
            size="lg"
            shape="rounded"
          />
        ) : (
          <LuText size={45} />
        )}
        <Card.Title mb="2">{props.PostData.title}</Card.Title>
        <Card.Description truncate lineClamp={8}>
          {props.PostData.text}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button>Read Now</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default PostCard;

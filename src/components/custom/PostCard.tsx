import Post from "@/types/Post";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@chakra-ui/react";
import { LuText } from "react-icons/lu";
import { Link } from "react-router-dom";
interface Props {
  PostData: Post;
}

const PostCard = (props: Props) => {
  return (
    <Card.Root maxH="500px">
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
        <Link to={"/posts/" + props.PostData.postId.toString()}>
          <Button>Read Now</Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  );
};

export default PostCard;

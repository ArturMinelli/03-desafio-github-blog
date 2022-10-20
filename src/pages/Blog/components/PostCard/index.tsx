import { PostCardContainer, PostCardHeader } from "./styles";
import { distanceToNow } from "../../../../utils/formatDistanceToNow";
import markdownToTxt from 'markdown-to-txt';
import { IPost } from "../..";

interface PostCardProps {
  post: IPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer
      to={`/post/${post.number}`}
    >
      <PostCardHeader>
        <h2>{post.title}</h2>
        <span>{distanceToNow(new Date(post.created_at))}</span>
      </PostCardHeader>
      <p>
        {markdownToTxt(post.body)}
      </p>
    </PostCardContainer>
  )
}
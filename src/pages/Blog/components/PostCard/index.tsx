import { PostCardContainer, PostCardHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import { distanceToNow } from "../../../../utils/formatDistanceToNow";
import markdownToTxt from 'markdown-to-txt';

interface PostCardProps {
  issueNumber: number;
  issueTitle: string;
  issueContent: string;
  createdAt: string;
}

export function PostCard({issueNumber, issueTitle, issueContent, createdAt}: PostCardProps) {
  const navigate = useNavigate()

  const content = markdownToTxt(issueContent)
  console.log(content)

  function handlePostClicked() {
    const path = `/post/${issueNumber}`

    navigate(path)
  }

  return (
    <PostCardContainer onClick={handlePostClicked}>
      <PostCardHeader>
        <h2>{issueTitle}</h2>
        <span>{distanceToNow(new Date(createdAt))}</span>
      </PostCardHeader>
      <p>
        {content}
      </p>
    </PostCardContainer>
  )
}
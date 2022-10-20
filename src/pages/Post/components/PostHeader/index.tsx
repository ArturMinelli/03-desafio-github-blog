import { StyledLink } from "../../../../components/StyledLink";
import { InfosWithIconContainer, LinksContainer, PostHeaderContainer, Title } from "./styles";
import { CaretLeft, ArrowSquareOut, GithubLogo, Calendar, ChatCircle } from 'phosphor-react'
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { distanceToNow } from "../../../../utils/formatDistanceToNow";
import { Link as RouterLink } from 'react-router-dom'
import { IPost } from "../../../Blog";

interface PostHeaderProps {
  post: IPost;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
    <LinksContainer>
      <StyledLink>
        <RouterLink to='/'>
          <CaretLeft size={18} weight="bold"/>
          voltar
        </RouterLink>
      </StyledLink>
      <StyledLink>
        <a href={post.html_url}>
          github
          <ArrowSquareOut size={20} weight="bold"/>
        </a>
      </StyledLink>
    </LinksContainer>
    <Title>{post.title}</Title>
    <InfosWithIconContainer>
      <InfoWithIcon
        icon={<GithubLogo size={18} weight="fill"/>}
        text={post.user?.login}
      />
      <InfoWithIcon
        icon={<Calendar size={18} weight="fill"/>}
        text={post.created_at && distanceToNow(new Date(post.created_at))}
      />
      <InfoWithIcon
        icon={<ChatCircle size={18} weight="fill"/>}
        text={`${post.comments} comentários`}
      />
    </InfosWithIconContainer>
  </PostHeaderContainer>
  )
}
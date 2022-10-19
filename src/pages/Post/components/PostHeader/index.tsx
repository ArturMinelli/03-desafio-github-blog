import { StyledLink } from "../../../../components/StyledLink";
import { InfosWithIconContainer, LinksContainer, PostHeaderContainer, Title } from "./styles";
import { CaretLeft, ArrowSquareOut, GithubLogo, Calendar, ChatCircle } from 'phosphor-react'
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { distanceToNow } from "../../../../utils/formatDistanceToNow";
import { Link as RouterLink } from 'react-router-dom'

interface PostHeaderProps {
  issue: any | undefined;
}

export function PostHeader({ issue }: PostHeaderProps) {
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
        <a href={issue.html_url}>
          github
          <ArrowSquareOut size={20} weight="bold"/>
        </a>
      </StyledLink>
    </LinksContainer>
    <Title>{issue.title}</Title>
    <InfosWithIconContainer>
      <InfoWithIcon
        icon={<GithubLogo size={18} weight="fill"/>}
        text={issue.user?.login}
      />
      <InfoWithIcon
        icon={<Calendar size={18} weight="fill"/>}
        text={issue.created_at && distanceToNow(new Date(issue.created_at))}
      />
      <InfoWithIcon
        icon={<ChatCircle size={18} weight="fill"/>}
        text={`${issue.comments} comentários`}
      />
    </InfosWithIconContainer>
  </PostHeaderContainer>
  )
}
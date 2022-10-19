import { Link } from "../../../../components/Link";
import { InfosWithIconContainer, LinksContainer, PostHeaderContainer, Title } from "./styles";
import { CaretLeft, ArrowSquareOut, GithubLogo, Calendar, ChatCircle } from 'phosphor-react'
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { distanceToNow } from "../../../../utils/formatDistanceToNow";

export function PostHeader({ issue }: any) {
  return (
    <PostHeaderContainer>
    <LinksContainer>
      <Link
        href="/"
        type="internal"
        text="Voltar"
        icon={<CaretLeft size={18} weight="bold" />}
        iconRight={false}
      />
      <Link
        type="external"
        text="Ver no github"
        icon={<ArrowSquareOut size={18} weight="bold" />}
        iconRight={true}
        href={issue.html_url}
      />
    </LinksContainer>
    <Title>{issue.title}</Title>
    <InfosWithIconContainer>
      <InfoWithIcon
        icon={<GithubLogo size={18} weight="fill"/>}
        text={issue.user.login}
      />
      <InfoWithIcon
        icon={<Calendar size={18} weight="fill"/>}
        text={distanceToNow(new Date(issue.created_at))}
      />
      <InfoWithIcon
        icon={<ChatCircle size={18} weight="fill"/>}
        text={`${issue.comments} comentários`}
      />
    </InfosWithIconContainer>
  </PostHeaderContainer>
  )
}
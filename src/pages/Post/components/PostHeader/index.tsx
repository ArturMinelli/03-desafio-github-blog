import { Link } from "../../../../components/Link";
import { Link as RouterLink } from 'react-router-dom'
import { InfosWithIconContainer, LinksContainer, PostHeaderContainer, Title } from "./styles";
import { CaretLeft, ArrowSquareOut, GithubLogo, Calendar, ChatCircle } from 'phosphor-react'
import { InfoWithIcon } from "../../../../components/InfoWithIcon";

export function PostHeader() {
  return (
    <PostHeaderContainer>
    <LinksContainer>
      <RouterLink to='/' style={{textDecoration: 'none'}}>
        <Link
          text="Voltar"
          icon={<CaretLeft size={18} weight="bold" />}
          iconRight={false}
        />
      </RouterLink>
      <Link
        text="Ver no github"
        icon={<ArrowSquareOut size={18} weight="bold" />}
        iconRight={true}
        href="https://github.com/ArturMinelli"
      />
    </LinksContainer>
    <Title>The Secrets of OOP (Object Oriented Programming)</Title>
    <InfosWithIconContainer>
      <InfoWithIcon
        icon={<GithubLogo size={18} weight="fill"/>}
        text={'ArturMinelli'}
      />
      <InfoWithIcon
        icon={<Calendar size={18} weight="fill"/>}
        text={'Há 2 dias'}
      />
      <InfoWithIcon
        icon={<ChatCircle size={18} weight="fill"/>}
        text={'5 comentários'}
      />
    </InfosWithIconContainer>
  </PostHeaderContainer>
  )
}
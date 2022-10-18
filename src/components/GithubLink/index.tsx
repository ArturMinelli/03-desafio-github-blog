import { GithubLinkContainer } from "./styles";
import { ArrowSquareOut } from 'phosphor-react'

interface GithubLinkProps {
  text: string;
  href: string;
}

export function GithubLink({ text, href }: GithubLinkProps) {
  return (
    <GithubLinkContainer>
      <a href={href}>{text}</a>
      <ArrowSquareOut size={16} weight="bold"/>
    </GithubLinkContainer>
  )
}
import { LinkContainer } from "./styles";
import { ReactNode } from "react";
import { Link as RouterLink } from 'react-router-dom'

interface LinkProps {
  text: string;
  href: string;
  icon: ReactNode;
  iconRight: boolean;
  type: 'internal' | 'external';
}

export function Link({ text, href, icon, iconRight, type }: LinkProps) {
  return (
    <LinkContainer iconRight={iconRight}>
      {type === 'external' && <a href={href}>{text}</a>}
      {type === 'internal' && <RouterLink to={href}>{text}</RouterLink>}
      {icon}
    </LinkContainer>
  )
}
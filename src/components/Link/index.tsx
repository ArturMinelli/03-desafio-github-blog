import { LinkContainer } from "./styles";
import { ReactNode } from "react";

interface LinkProps {
  text: string;
  href?: string;
  icon: ReactNode;
  iconRight: boolean;
}

export function Link({ text, href, icon, iconRight }: LinkProps) {
  return (
    <LinkContainer iconRight={iconRight}>
      <a href={href}>{text}</a>
      {icon}
    </LinkContainer>
  )
}
import { LinkContainer } from "./styles";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function StyledLink({ children }: StyledLinkProps) {
  return (
    <LinkContainer>
      {children}
    </LinkContainer>
  )
}
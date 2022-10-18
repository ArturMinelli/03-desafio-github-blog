import { ReactNode } from "react";
import { InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
  text: ReactNode | string;
  icon: ReactNode;
}

export function InfoWithIcon({ text, icon }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      {icon}
      {text}
    </InfoWithIconContainer>
  )
}
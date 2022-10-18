import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Buildings, GithubLogo, Users } from 'phosphor-react'
import { ProfileContainer, ProfileInfo } from "./styles";
import { GithubLink } from "../../../../components/GithubLink";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/94147899?v=4" alt="" />

      <ProfileInfo>
        <h1>Artur Minelli</h1>
        <GithubLink
          text="github"
          href="https://github.com/ArturMinelli"
        />
        <p>
          Hi, my name is Artur, and i am a Web Developer. I love learning about technology and i really like soliving puzzles and logic games.
          So becoming a Web Developer was a very natural process for me.
        </p>
        <div>
          <InfoWithIcon
            icon={<GithubLogo size={18} weight="fill"/>}
            text={'ArturMinelli'}
          />
          <InfoWithIcon
            icon={<Buildings size={18} weight="fill"/>}
            text={'ArturMinelli'}
          />
          <InfoWithIcon
            icon={<Users size={18} weight="fill"/>}
            text={'Google'}
          />
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}
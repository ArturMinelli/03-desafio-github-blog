import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Buildings, GithubLogo, Users } from 'phosphor-react'
import { ProfileContainer, ProfileHeader, ProfileInfo } from "./styles";
import { Link } from "../../../../components/Link";
import { ArrowSquareOut } from 'phosphor-react'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/94147899?v=4" alt="" />

      <ProfileInfo>
        <ProfileHeader>
          <h1>Artur Minelli</h1>
          <Link
            text="github"
            href="https://github.com/ArturMinelli"
            icon={<ArrowSquareOut size={18} weight="bold" />}
            iconRight={true}
          />
        </ProfileHeader>
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
            text={'Google'}
          />
          <InfoWithIcon
            icon={<Users size={18} weight="fill"/>}
            text={'32 seguidores'}
          />
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}
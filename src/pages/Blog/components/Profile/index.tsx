import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Buildings, GithubLogo, Users } from 'phosphor-react'
import { ProfileContainer, ProfileHeader, ProfileInfo } from "./styles";
import { Link } from "../../../../components/Link";
import { ArrowSquareOut } from 'phosphor-react'

export function Profile({ user }: any) {
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="Github Avatar" />

      <ProfileInfo>
        <ProfileHeader>
          <h1>{user.name}</h1>
          <Link
            type="external"
            text="github"
            href={user.html_url}
            icon={<ArrowSquareOut size={18} weight="bold" />}
            iconRight={true}
          />
        </ProfileHeader>
        <p>{user.bio}</p>
        <div>
          <InfoWithIcon
            icon={<GithubLogo size={18} weight="fill"/>}
            text={'ArturMinelli'}
          />
          {user.company && <InfoWithIcon
                              icon={<Buildings size={18} weight="fill"/>}
                              text={'Google'}
                            />
          }
          <InfoWithIcon
            icon={<Users size={18} weight="fill"/>}
            text={`${user.followers} seguidores`}
          />
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}
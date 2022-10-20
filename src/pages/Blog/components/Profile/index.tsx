import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Buildings, GithubLogo, Users } from 'phosphor-react'
import { InfosWithIconContainer, ProfileContainer, ProfileHeader, ProfileInfo } from "./styles";
import { StyledLink } from "../../../../components/StyledLink";
import { ArrowSquareOut } from 'phosphor-react'

export function Profile({ user }: any) {
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="Github Avatar" />

      <ProfileInfo>
        <ProfileHeader>
          <h1>{user.name}</h1>
          <StyledLink>
            <a href={user.html_url}>
              github
              <ArrowSquareOut size={20} weight="bold"/>
            </a>
          </StyledLink>
        </ProfileHeader>
        <p>{user.bio}</p>
        <InfosWithIconContainer>
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
        </InfosWithIconContainer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
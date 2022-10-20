import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Buildings, GithubLogo, Users } from 'phosphor-react'
import { InfosWithIconContainer, ProfileContainer, ProfileHeader, ProfileInfo } from "./styles";
import { StyledLink } from "../../../../components/StyledLink";
import { ArrowSquareOut } from 'phosphor-react'
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  company: string;
  followers: number;
  login: string;
}

export function Profile() {
  const [profileData, setProfileData] = useState({} as ProfileData)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ): (
        <>
          <img src={profileData.avatar_url} alt="Github Avatar" />

          <ProfileInfo>
            <ProfileHeader>
              <h1>{profileData.name}</h1>
              <StyledLink>
                <a href={profileData.html_url}>
                  github
                  <ArrowSquareOut size={20} weight="bold"/>
                </a>
              </StyledLink>
            </ProfileHeader>
            <p>{profileData.bio}</p>
            <InfosWithIconContainer>
              <InfoWithIcon
                icon={<GithubLogo size={18} weight="fill"/>}
                text={profileData.login}
              />
              {profileData.company && <InfoWithIcon
                                  icon={<Buildings size={18} weight="fill"/>}
                                  text={'Google'}
                                />
              }
              <InfoWithIcon
                icon={<Users size={18} weight="fill"/>}
                text={`${profileData.followers} seguidores`}
              />
            </InfosWithIconContainer>
          </ProfileInfo>
        </>
      )}
    </ProfileContainer>
  )
}
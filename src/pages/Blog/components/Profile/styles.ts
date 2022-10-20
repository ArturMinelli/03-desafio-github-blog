import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  padding: 2rem 2.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-profile']};
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
    overflow: hidden;
    object-fit: cover;
  }
`

export const ProfileHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ProfileInfo = styled.div`
  flex: 1;
  height: 100%;

  h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.fontSizes['title-l']};
    font-weight: 700;
  }

  p {
    margin-top: 0.75rem;
  }
`

export const InfosWithIconContainer = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
`

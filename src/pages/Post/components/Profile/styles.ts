import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  padding: 2rem 2.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-profile']};
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

export const ProfileInfo = styled.div`
  flex: 1;

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    gap: 1.5rem;
  }
`

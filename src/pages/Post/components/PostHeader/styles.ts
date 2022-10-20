import styled from "styled-components"

export const PostHeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  padding: 2rem;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfosWithIconContainer = styled.ul`
  display: flex;
  gap: 2.5rem;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['title-l']};
  color: ${({ theme }) => theme.colors['base-title']};
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
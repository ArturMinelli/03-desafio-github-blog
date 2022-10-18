import styled from 'styled-components'

export const PostCardContainer = styled.article`
  background: ${({ theme }) => theme['base-post']};
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
  }

  p {
    margin-top: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
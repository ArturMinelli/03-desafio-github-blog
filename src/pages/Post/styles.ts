import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
`

export const PostContent = styled.section`
  padding: 2rem;

  img {
    width: 100%;
  }

  h1, h2, h3 {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.blue};
  }

  a {
    color: ${({ theme }) => theme.colors.blue}
  }

  p, li {
    margin-bottom: 1.5rem;
  }
`

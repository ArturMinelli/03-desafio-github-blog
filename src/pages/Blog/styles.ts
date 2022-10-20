import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
`

export const PostsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

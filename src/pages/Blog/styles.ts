import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
`

export const PostsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  margin-top: 3rem;
`

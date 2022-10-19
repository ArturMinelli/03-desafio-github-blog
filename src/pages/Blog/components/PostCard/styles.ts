import styled from 'styled-components'

export const PostCardContainer = styled.article`
  background: ${({ theme }) => theme['base-post']};
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  transition: 0.5s;

  p {
    margin-top: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    cursor: pointer;
    transition: 1s ease-out;
    transform: translate(-0.1rem, -0.75rem);
    box-shadow: 0.25rem 0.25rem 20px 2px ${({ theme }) => theme['base-input']};
  }
`

export const PostCardHeader = styled.div`
  display: flex;
  align-items: flex-start;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
  }

  span {
    width: 8rem;
    display: flex;
    justify-content: right;
    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

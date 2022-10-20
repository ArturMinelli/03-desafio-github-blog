import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCardContainer = styled(Link)`
  background: ${({ theme }) => theme.colors['base-post']};
  display: flex;
  flex-direction: column;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  transition: 0.5s;
  text-decoration: none;
  color: ${({ theme }) => theme.colors['base-text']};

  &:hover {
    cursor: pointer;
    transition: 0.75s ease-out;
    transform: translate(-0.25rem, -0.75rem);
    box-shadow: 0.25rem 0.25rem 20px 2px ${({ theme }) => theme.colors['base-input']};
  }

  p {
    margin-top: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const PostCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['title-m']};
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  span {
    width: 8rem;
    display: flex;
    justify-content: right;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

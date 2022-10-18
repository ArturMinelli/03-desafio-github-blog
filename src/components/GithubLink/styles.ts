import styled from 'styled-components'

export const GithubLinkContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  top: -0.25rem;
  right: 0;

  a {
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};
  }

  svg {
    color: ${({ theme }) => theme.blue};
  }
`
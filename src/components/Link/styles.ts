import styled, { css } from 'styled-components'

interface LinkContainerProps {
  iconRight: boolean;
}

export const LinkContainer = styled.span<LinkContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;

  ${({ iconRight }) => !iconRight && css`
    flex-direction: row-reverse;
  `}

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
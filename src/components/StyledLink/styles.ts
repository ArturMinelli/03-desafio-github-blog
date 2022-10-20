import styled, { css } from 'styled-components'
import { Slot } from '@radix-ui/react-slot'

export const LinkContainer = styled(Slot)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;

  font-size: ${({ theme }) => theme.fontSizes.link};
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};

  svg {
    color: ${({ theme }) => theme.colors.blue};
  }
`
import styled, { css } from 'styled-components'
import { Slot } from '@radix-ui/react-slot'

export const LinkContainer = styled(Slot)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;

  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.blue};

  svg {
    color: ${({ theme }) => theme.blue};
  }
`
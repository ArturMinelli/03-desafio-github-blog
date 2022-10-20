import styled from 'styled-components'

export const InfoWithIconContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['base-subtitle']};

  svg {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
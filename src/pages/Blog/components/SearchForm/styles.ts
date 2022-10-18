import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`

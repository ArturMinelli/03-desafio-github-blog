import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 4rem;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme['base-subtitle']};

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
  border: 1px solid ${({ theme }) => theme['base-border']};
  border-radius: 6px;
  margin-top: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`

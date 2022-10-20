import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 4rem;

  header {
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSizes['title-m']};
    font-weight: bold;
    color: ${({ theme }) => theme.colors['base-subtitle']};

    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: ${({ theme }) => theme.fontSizes['text-s']};
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors['base-input']};
  color: ${({ theme }) => theme.colors['base-text']};
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 6px;
  margin-top: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

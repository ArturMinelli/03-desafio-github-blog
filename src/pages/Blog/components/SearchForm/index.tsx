import { Input, SearchFormContainer } from "./styles";

interface SearchFormProps {
  issuesAmount: number;
}

export function SearchForm({ issuesAmount }: SearchFormProps) {
  return (
    <SearchFormContainer>
      <div>
        Publicações
        <span> {issuesAmount && `${issuesAmount} publicações`} </span>
      </div>
      <Input
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}
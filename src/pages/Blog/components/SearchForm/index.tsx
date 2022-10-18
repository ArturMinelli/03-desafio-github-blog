import { Input, SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        Publicações
        <span>6 publicações</span>
      </div>
      <Input
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}
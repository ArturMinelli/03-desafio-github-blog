import { Input, SearchFormContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface SearchFormProps {
  issuesAmount: number;
}

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm({ issuesAmount }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchPosts(data: SearchFormInputs) {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        Publicações
        <span> {issuesAmount && `${issuesAmount} publicações`} </span>
      </div>
      <Input
        {...register('query')}
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}
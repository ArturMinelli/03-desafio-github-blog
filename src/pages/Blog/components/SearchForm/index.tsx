import { Input, SearchFormContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface SearchFormProps {
  postsAmount: number;
  getPosts: (query: string) => void;
}

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm({ postsAmount, getPosts }: SearchFormProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchPosts({ query }: SearchFormInputs) {
    getPosts(query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        Publicações
        <span> {`${postsAmount} publicações`} </span>
      </header>
      <Input
        {...register('query')}
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}
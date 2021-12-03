import HitList, { HitProps } from './Hits'
import * as S from './styles'
import result from './Hits/mock'

export type SearchProps = {
  inputSearch: React.ReactNode
  hits: HitProps[]
}

const Search = ({
  inputSearch = (
    <input
      aria-label="search"
      placeholder="Busque por podcast ou tema"
      type="text"
    ></input>
  ),
  hits = result
}: SearchProps) => {
  return (
    <S.Wrapper>
      <S.SearchInputWrapper>
        <S.SearchInput>{inputSearch}</S.SearchInput>
      </S.SearchInputWrapper>
      <HitList hits={hits} />
    </S.Wrapper>
  )
}

export default Search

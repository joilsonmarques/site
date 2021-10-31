import HitList from './Hits'
import * as S from './styles'

import list from './Hits/mock'

const Search = () => (
  <S.Wrapper>
    <S.SearchInputWrapper>
      <S.SearchInput
        aria-label="search"
        placeholder="Busque por podcast ou tema"
        type="text"
      ></S.SearchInput>
    </S.SearchInputWrapper>
    <HitList items={list} />
  </S.Wrapper>
)

export default Search

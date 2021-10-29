import * as S from './styles'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const Search = () => {
  const searchClient = algoliasearch(
    'A8YJCZSTA9',
    '4fd82de3878a5d43d956a660e8dcaada'
  )

  return (
    <S.Wrapper>
      <InstantSearch searchClient={searchClient} indexName={'dev_ancp'}>
        <S.SearchInputWrapper>
          <S.SearchInput
            aria-label="search"
            placeholder="Busque por podcast ou tema"
          >
            <SearchBox></SearchBox>
          </S.SearchInput>
        </S.SearchInputWrapper>
        <S.SearchResultsWrapper>
          <Hits />
          <div>
            <span>
              <b>Radiofonias</b> Internéticas
            </span>
            <h3>
              <b>Radiofonias</b> Internéticas - S1 E1
            </h3>
            <p>
              Nosso primeiro episódio é conduzido pela @heloisapr que nos leva a
              um papo com Aline Valek, escritora, contadora de histórias e
              podcaster do Bobagens Imperdíveis. Prepara o fone, clica no link
              da nossa bio e se jogue nessa escuta! O Radiofonias é um lugar de
              experimento, escuta & de ideias.
            </p>
          </div>
          <div>
            <span>
              <b>Radiofonias</b> Internéticas
            </span>
            <h3>
              <b>Radiofonias</b> Internéticas - S1 E1
            </h3>
            <p>
              Nosso primeiro episódio é conduzido pela @heloisapr que nos leva a
              um papo com Aline Valek, escritora, contadora de histórias e
              podcaster do Bobagens Imperdíveis. Prepara o fone, clica no link
              da nossa bio e se jogue nessa escuta! O Radiofonias é um lugar de
              experimento, escuta & de ideias.
            </p>
          </div>
        </S.SearchResultsWrapper>
      </InstantSearch>
    </S.Wrapper>
  )
}

export default Search

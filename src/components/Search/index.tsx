import * as S from './styles'

const Search = () => (
  <S.Wrapper>
    <S.SearchInputWrapper>
      <S.SearchInput
        aria-label="search"
        placeholder="Busque por podcast ou tema"
        type="text"
      ></S.SearchInput>
    </S.SearchInputWrapper>
    <S.SearchResultsWrapper>
      <div>
        <span>
          <b>Radiofonias</b> Internéticas
        </span>
        <h3>
          <b>Radiofonias</b> Internéticas - S1 E1
        </h3>
        <p>
          Nosso primeiro episódio é conduzido pela @heloisapr que nos leva a um
          papo com Aline Valek, escritora, contadora de histórias e podcaster do
          Bobagens Imperdíveis. Prepara o fone, clica no link da nossa bio e se
          jogue nessa escuta! O Radiofonias é um lugar de experimento, escuta &
          de ideias.
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
          Nosso primeiro episódio é conduzido pela @heloisapr que nos leva a um
          papo com Aline Valek, escritora, contadora de histórias e podcaster do
          Bobagens Imperdíveis. Prepara o fone, clica no link da nossa bio e se
          jogue nessa escuta! O Radiofonias é um lugar de experimento, escuta &
          de ideias.
        </p>
      </div>
    </S.SearchResultsWrapper>
  </S.Wrapper>
)

export default Search

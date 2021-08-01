import EpisodeCard, { EpisodeCardProps } from 'components/EpisodeCard'

import * as S from './styles'

export type SelectedEpisodesProps = {
  items: EpisodeCardProps[]
}

const SelectedEpisodes = ({ items }: SelectedEpisodesProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <EpisodeCard key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default SelectedEpisodes

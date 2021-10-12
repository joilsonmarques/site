import ImageBox from 'components/ImageBox'
import Link from 'next/link'

import Ribbon from 'components/atoms/Ribbon'

import * as S from './styles'

export type EpisodeCardProps = {
  id: string
  slug: string
  title: string
  podcast: string
  img: string
  ribbon?: React.ReactNode
}

const EpisodeCard = ({
  slug,
  title,
  podcast,
  img,
  ribbon
}: EpisodeCardProps) => (
  <S.Wrapper data-cy="episode-card">
    {!!ribbon && (
      <Ribbon color={'#9071AF'} textColor={'white'}>
        {ribbon}
      </Ribbon>
    )}
    <ImageBox title={title} img={img} />
    <S.Content>
      <Link href={`/episode/${slug}`} passHref>
        <S.Info>
          <S.Podcast>{podcast}</S.Podcast>
          <S.Title>{title}</S.Title>
        </S.Info>
      </Link>
    </S.Content>
  </S.Wrapper>
)

export default EpisodeCard

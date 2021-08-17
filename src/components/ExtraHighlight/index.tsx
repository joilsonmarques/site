import Image from 'next/image'
import Heading from 'components/Heading'

import * as S from './styles'
import Embed from 'components/Embed'

export type ExtraHighlightProps = {
  title: string
  cover: string
  description: string
  datetime: string
  address: string
  embedUrl: string
}
const ExtraHighlight = ({
  title,
  cover,
  description,
  datetime,
  address,
  embedUrl
}: ExtraHighlightProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <Image src={cover} alt={title} layout="fill" objectFit="cover" />
    </S.ImageBox>

    <S.Content>
      <Heading>{title}</Heading>
      <p>{description}</p>
      <span>{datetime}</span>
      <span>{address}</span>
      <Embed embedUrl={embedUrl} />
    </S.Content>
  </S.Wrapper>
)

export default ExtraHighlight

import Image from 'next/image'
import Link from 'next/link'
import Heading from 'components/Heading'

import * as S from './styles'
import Embed from 'components/Embed'

export type ExtraHighlightProps = {
  cover: string
  title: string
  subtitle: string
  primaryInfo: string
  secondaryInfo: string
  embedUrl: string
  link: {
    url: string
    isExternal: boolean
  }
}
const ExtraHighlight = ({
  cover,
  title,
  subtitle,
  primaryInfo,
  secondaryInfo,
  embedUrl,
  link
}: ExtraHighlightProps) =>
  link ? (
    <S.Wrapper>
      <S.ImageBox>
        <Link href={link.url} passHref>
          {link.isExternal ? (
            <a target="_blank">
              <Image src={cover} alt={title} layout="fill" objectFit="cover" />
            </a>
          ) : (
            <a target="_self">
              <Image src={cover} alt={title} layout="fill" objectFit="cover" />
            </a>
          )}
        </Link>
      </S.ImageBox>
      <S.Content>
        <Link href={link.url} passHref>
          {link.isExternal ? (
            <a target="_blank">
              <Heading>{title}</Heading>
            </a>
          ) : (
            <a target="_self">
              <Heading>{title}</Heading>
            </a>
          )}
        </Link>
        <p>{subtitle}</p>
        <span>{primaryInfo}</span>
        <span>{secondaryInfo}</span>
        <Embed embedUrl={embedUrl} />
      </S.Content>
    </S.Wrapper>
  ) : null

export default ExtraHighlight

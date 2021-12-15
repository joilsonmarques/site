import Embed from 'components/Embed'
import * as S from './styles'

export type CategoryProps = {
  name: string
  slug: string
}

export type InternalHeaderProps = {
  img: string
  embedUrl: string
  title: string
  summary: string
}

const InternalHeader = ({ title, embedUrl, summary }: InternalHeaderProps) => (
  <S.Wrapper>
    <div>{<h2>{title}</h2>}</div>
    <div>
      <Embed embedUrl={embedUrl} />
    </div>
    <div>{<p>{summary}</p>}</div>
  </S.Wrapper>
)

export default InternalHeader

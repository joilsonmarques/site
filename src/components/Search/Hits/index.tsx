import Link from 'next/link'
import * as S from './styles'

export type HitProps = {
  id: number
  slug: string
  title: string
  subTitle: string
  number: number
  releaseDate: string
  description: string
  podcast: string
  author: string
}

export type HitsListProps = {
  hits: HitProps[]
}

const HitList = ({ hits }: HitsListProps) =>
  hits ? (
    <S.Wrapper>
      <h3>Resultados</h3>
      {hits.map((item, index) => (
        <S.List key={index}>
          <div>
            <Link href={`/${item.slug}`} passHref>
              <a target="_self" title={item.title}>
                <em>{item.podcast && <span>{item.podcast}</span>}</em>
                {item.author && (
                  <span className="light-emphasis">
                    &nbsp;por <em>{item.author}</em>
                  </span>
                )}
                <h3>
                  {item.title} {item.number && <span>#{item.number}</span>}
                </h3>
                {item.subTitle && <p>{item.subTitle}</p>}
                {item.description && <p>{item.description}</p>}
              </a>
            </Link>
          </div>
        </S.List>
      ))}
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <h3>Nenhum resultado encontrado</h3>
    </S.Wrapper>
  )

export default HitList

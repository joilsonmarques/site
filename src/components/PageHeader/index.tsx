import Link from 'next/link'
import * as S from './styles'

export type CategoryProps = {
  name: string
  slug: string
}

export type PageHeaderProps = {
  releaseDate: string
  title: string
  from: string
  categories: CategoryProps[]
}

const PageHeader = ({
  releaseDate,
  title,
  from,
  categories
}: PageHeaderProps) => (
  <S.Wrapper>
    <span>{releaseDate}</span>
    <h2>{title}</h2>
    <p>{from}</p>
    <S.Categories>
      <ul aria-labelledby="Lista de Categorias">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={category.slug} passHref>
              <a target="_self">{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </S.Categories>
  </S.Wrapper>
)

export default PageHeader

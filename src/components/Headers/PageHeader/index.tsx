import ImageBox from 'components/ImageBox'
import Link from 'next/link'
import * as S from './styles'

export type CategoryProps = {
  name: string
  slug: string
}

export type PageHeaderProps = {
  img: string
  releaseDate: string
  title: string
  from: string
  categories: CategoryProps[]
}

const PageHeader = ({
  img,
  releaseDate,
  title,
  from,
  categories
}: PageHeaderProps) => (
  <S.Wrapper>
    <S.Banner>{img && <ImageBox title={title} img={img} />}</S.Banner>
    <div>
      <S.Content>
        <S.ContentText>
          <span>{releaseDate}</span>
          <h2>{title}</h2>
          <p>{from}</p>
        </S.ContentText>

        <S.Categories>
          <ul aria-labelledby="Lista de Categorias">
            {categories?.map((category, index) => (
              <li key={index}>
                <Link href={category.slug} passHref>
                  <a target="_self">{category.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </S.Categories>
      </S.Content>
    </div>
  </S.Wrapper>
)

export default PageHeader

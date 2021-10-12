import Link from 'next/link'

import ImageBox from 'components/ImageBox'
import * as S from './styles'
import React, { useState, useEffect, useRef } from 'react'
import ReactHtmlParser from 'react-html-parser'

export type CategoryProps = {
  name: string
  slug: string
}

export type PodcastHeaderProps = {
  title: string
  subtitle: string
  description: string
  from: string
  img: string
  categories: CategoryProps[]
}

const PodcastHeader = ({
  title,
  subtitle,
  description,
  from,
  img,
  categories
}: PodcastHeaderProps) => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current.clientHeight)
    }, 1)
  })

  return (
    <S.Wrapper outerHeight={`${height}px`}>
      <div>
        <S.Cover>
          <ImageBox title={title} img={img} />
        </S.Cover>
        <S.Content>
          <S.ContentText ref={ref}>
            <span>Podcast</span>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <p>por {from}</p>
          </S.ContentText>

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
        </S.Content>
      </div>
      <S.Description>{ReactHtmlParser(description)}</S.Description>
    </S.Wrapper>
  )
}

export default PodcastHeader

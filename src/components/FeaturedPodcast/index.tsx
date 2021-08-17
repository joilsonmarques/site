import { useState } from 'react'
import Link from 'next/link'
import Heading from 'components/Heading'
import { ArrowForward as ArrowForwardIcon } from '@styled-icons/material-outlined/ArrowForward'
import { ArrowBack as ArrowBackIcon } from '@styled-icons/material-outlined/ArrowBack'

import * as S from './styles'

export type CategoryProps = {
  name: string
  slug: string
}

export type LastEpisodeProps = {
  embedUrl: string
}

export type PodcastProps = {
  cover?: string
  title: string
  subtitle: string
  description: string
  slug: string
  categories: CategoryProps[]
  lastEpisode: LastEpisodeProps
}

export type FeaturedPodcastProps = {
  sectionTitle: string
  background: string
  description: string
  podcast: PodcastProps
}

const FeaturedPodcast = ({
  sectionTitle,
  background,
  description,
  podcast
}: FeaturedPodcastProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.CallWrapper src={background}>
        <S.Cover src={background} role="image" aria-label="cover" />
        <S.Info>
          <div>
            <Heading color="white">{sectionTitle}</Heading>
            <p>{description}</p>
          </div>
          <div>
            <ArrowForwardIcon
              aria-label="ver podcast"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            />
          </div>
        </S.Info>
      </S.CallWrapper>
      <S.PodcastWrapper aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Podcast>
          <div>
            <Heading color="white">{podcast.title}</Heading>
            <p>{podcast.description}</p>
            <iframe
              src={podcast.lastEpisode.embedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div>
            <S.PodcastCover
              src={podcast.cover}
              role="image"
              aria-label={podcast.title}
            />
            {podcast.categories.map((item) => (
              <Link key={item.slug} href={item.slug}>
                <a>{item.name}</a>
              </Link>
            ))}
          </div>
          <div>
            <ArrowBackIcon
              aria-label="voltar para apresentação"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            />
          </div>
        </S.Podcast>
      </S.PodcastWrapper>
    </S.Wrapper>
  )
}

export default FeaturedPodcast

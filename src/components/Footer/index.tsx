import Link from 'next/link'
import Logo from 'components/Logo'
import Heading from 'components/Heading'
import { Instagram as InstagramIcon } from '@styled-icons/boxicons-logos/Instagram'
import { Youtube as YoutubeIcon } from '@styled-icons/boxicons-logos/Youtube'
import { Twitter as TwitterIcon } from '@styled-icons/boxicons-logos/Twitter'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column aria-labelledby="logo">
        <S.LogoWrapper>
          <Logo size="large" color="white" />
        </S.LogoWrapper>
      </S.Column>
      <S.Column aria-labelledby="list-links">
        <Heading size="small">Links</Heading>
        <nav aria-labelledby="Lista de links">
          <Link href="/podcasts">
            <a>Podcasts da nossa casa</a>
          </Link>
          <Link href="/livecasts">
            <a>Livecasts</a>
          </Link>
          <Link href="/eventos">
            <a>Eventos</a>
          </Link>
          <Link href="#">
            <a>Textos</a>
          </Link>
          <Link href="#">
            <a>Parcerias</a>
          </Link>
          <Link href="#">
            <a>Contato</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column aria-labelledby="social-media-and-contacts">
        <Heading size="small">Redes Sociais</Heading>

        <nav id="social-media">
          <a
            href="https://www.instagram.com/a-nossa-casa-de-podcasts"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            <InstagramIcon aria-label="Instagram" />
          </a>
          <a
            href="https://www.youtube.com/a-nossa-casa-de-podcasts"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            <YoutubeIcon aria-label="YouTube" />
          </a>
          <a
            href="https://www.twitter.com/a-nossa-casa-de-podcasts"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            <TwitterIcon aria-label="Twitter" />
          </a>
        </nav>

        <Heading size="small">Entre em contato</Heading>
        <a href="tel:+55 (61) 9 9999-9999">
          <span>+55 (61) 9 9999-9999</span>
        </a>
        <a href="mailto:contato@anossacasadepodcasts.bsb.br">
          <span>contato@anossacasadepodcasts.bsb.br</span>
        </a>
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Footer

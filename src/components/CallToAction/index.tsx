import Link from 'next/link'
import Heading from 'components/Heading'
import { East as LinkIcon } from '@styled-icons/material-outlined/East'
import { CallMade as ExternalLinkIcon } from '@styled-icons/material-outlined/CallMade'
import * as S from './styles'

export type linkProps = {
  label: string
  url: string
  isExternal: boolean
}

export type CallToActionProps = {
  title: string
  listLinks: linkProps[]
}
const CallToAction = ({ title, listLinks }: CallToActionProps) =>
  listLinks ? (
    <S.Wrapper>
      <Heading>{title}</Heading>
      <nav aria-labelledby="Lista de links">
        {listLinks.map((link, index) => (
          <Link key={index} href={link.url} passHref>
            {link.isExternal ? (
              <a target="_blank">
                {link.label} <ExternalLinkIcon aria-label="abrir link" />
              </a>
            ) : (
              <a target="_self">
                {link.label} <LinkIcon aria-label="abrir link" />
              </a>
            )}
          </Link>
        ))}
      </nav>
    </S.Wrapper>
  ) : null

export default CallToAction

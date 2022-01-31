import Base from 'components/templates/Base'
import { Container } from 'components/atoms/Container'
import InternalHeader, {
  InternalHeaderProps
} from 'components/Headers/InternalHeader'
import MemberList from 'components/MemberList'

import membersMock from 'components/MemberList/mock'

import * as S from './styles'
import { MenuLinksProps } from 'components/Menu'
import { FooterLinksProps } from 'components/Footer'
import { MemberProps } from 'components/Member'

export type AboutPageTemplateProps = {
  outerBarsColor: string
  innerBarsColor: string
  header: InternalHeaderProps
  members: MemberProps[]
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
}

const AboutPage = ({
  header,
  members = membersMock,
  outerBarsColor = '29292B',
  innerBarsColor = '0E3C63',
  menuListLinks,
  footerListLinks
}: AboutPageTemplateProps) => (
  <Base
    outerBarsColor={outerBarsColor}
    innerBarsColor={innerBarsColor}
    menuListLinks={menuListLinks}
    footerListLinks={footerListLinks}
  >
    <Container>
      <S.Section>
        <InternalHeader {...header} />
      </S.Section>
      <S.Section>
        <MemberList members={members} />
      </S.Section>
    </Container>
  </Base>
)

export default AboutPage

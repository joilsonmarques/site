import { Container } from 'components/atoms/Container'
import Footer, { LinksProps } from 'components/Footer'
import Menu from 'components/Menu'

import footer from 'components/Footer/mock'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  outerBarsColor: string
  innerBarsColor: string
  listLinks: LinksProps[]
}

const Base = ({
  children,
  outerBarsColor = '29292B',
  innerBarsColor = '451379',
  listLinks = footer
}: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <S.Content>{children}</S.Content>

      <Footer
        outerBarsColor={outerBarsColor}
        innerBarsColor={innerBarsColor}
        listLinks={listLinks}
      />
    </S.Wrapper>
  )
}

export default Base

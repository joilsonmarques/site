import { Container } from 'components/atoms/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  outerBarsColor: string
  innerBarsColor: string
}

const Base = ({
  children,
  outerBarsColor = '29292B',
  innerBarsColor = '451379'
}: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <S.Content>{children}</S.Content>

      <Footer outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor} />
    </S.Wrapper>
  )
}

export default Base

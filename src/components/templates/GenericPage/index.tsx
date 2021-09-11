/* eslint-disable prettier/prettier */
import Base from 'components/templates/Base'
import { Container } from 'components/atoms/Container'
import PageHeader, {PageHeaderProps} from 'components/PageHeader'

import header from 'components/PageHeader/mock'

import * as S from './styles'

export type GenericPageTemplateProps = {
  header: PageHeaderProps
}

const GenericPage = ({
  headerInfo = header,
  outerBarsColor = '29292B',
  innerBarsColor = 'BFCAD4'
}: GenericPageTemplateProps) => (

  <Base outerBarsColor={outerBarsColor} innerBarsColor={innerBarsColor}>
    <Container>
      <S.Section>
        <PageHeader {...headerInfo}/>
      </S.Section>
      <S.Section>
        <S.Content>

        </S.Content>
      </S.Section>
    </Container>
  </Base>
)

export default GenericPage

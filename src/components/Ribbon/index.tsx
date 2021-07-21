import * as S from './styles'

export type RibbonProps = {
  children: React.ReactNode
  color: 'black' | string
  textColor: 'white' | 'black'
}

const Ribbon = ({
  children,
  textColor = 'white',
  color = '#9071AF'
}: RibbonProps) => (
  <S.Wrapper color={color} textColor={textColor}>
    <span>{children}</span>
  </S.Wrapper>
)

export default Ribbon

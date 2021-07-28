import * as S from './styles'

export type FullSectionProps = {
  children: React.ReactNode
  className: string
  color:
    | 'white'
    | 'black'
    | 'lightGray'
    | 'gray'
    | 'lightGreen'
    | 'darkGray'
    | 'blue'
    | 'lightBlue'
    | 'darkBlue'
    | 'darkenBlue'
    | 'orange'
    | 'red'
    | 'purple'
    | 'lightPurple'
    | 'darkPurple'
}

const FullSection = ({
  children,
  className = 'fullSection',
  color = 'lightGray'
}: FullSectionProps) => (
  <S.Wrapper className={className} color={color}>
    {children}
  </S.Wrapper>
)

export default FullSection

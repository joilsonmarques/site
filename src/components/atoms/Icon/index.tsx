import * as Icons from '@styled-icons/entypo-social'
import * as S from './styles'

export type IconProps = {
  name: string
  size: string
}

/* Your icon name from database data can now be passed as prop */
const SocialIcon = ({ name, size }: IconProps) => {
  const IconComponent = Icons[name]

  if (!IconComponent) {
    // Return a default one
    return <S.Icon size={size}></S.Icon>
  }

  return (
    <S.Icon size={size}>
      <IconComponent />
    </S.Icon>
  )
}

export default SocialIcon

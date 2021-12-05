import SocialIcon from 'components/atoms/Icon'
import ImageBox from 'components/ImageBox'
import Link from 'next/link'
import * as S from './styles'

export type NetworkProps = {
  name: string
  url: string
}

export type MemberProps = {
  id: string
  name: string
  avatar: string
  bio: string
  networks: NetworkProps[]
}

const Member = ({ id, avatar, name, bio, networks }: MemberProps) => {
  return (
    <S.Wrapper id={id}>
      <ImageBox title={name} img={avatar} />
      <div>
        <h4>{name}</h4>
        <p>{bio}</p>
        <S.Networks>
          {networks.map((network, index) => (
            <Link key={index} href={network.url} passHref>
              <a target="_blank" title={network.name}>
                <SocialIcon name={network.name} size="50" color="black" />
              </a>
            </Link>
          ))}
        </S.Networks>
      </div>
    </S.Wrapper>
  )
}
export default Member

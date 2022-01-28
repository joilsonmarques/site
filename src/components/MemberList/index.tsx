import * as S from './styles'
import Member, { MemberProps } from 'components/Member'

export type MemberListProps = {
  members: MemberProps[]
}

const MemberList = ({ members }: MemberListProps) => {
  return members ? (
    <S.Wrapper>
      {members.map((member, index) => (
        <S.List key={index}>
          <div>
            <Member {...member} />
          </div>
        </S.List>
      ))}
    </S.Wrapper>
  ) : null
}

export default MemberList

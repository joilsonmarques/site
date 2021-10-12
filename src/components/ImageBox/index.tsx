import Image from 'next/image'
import * as S from './styles'

export type ImageBoxProps = {
  title: string
  img: string
}

const ImageBox = ({ title, img }: ImageBoxProps) =>
  img !== 'http://localhost:1337undefined' ? (
    <S.Wrapper>
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
    </S.Wrapper>
  ) : null

export default ImageBox

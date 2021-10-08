import Image from 'next/image'
import * as S from './styles'

export type ImageBoxProps = {
  title: string
  img: string
}

const ImageBox = ({ title, img }: ImageBoxProps) => (
  <S.Wrapper>
    <Image src={img} alt={title} layout="fill" objectFit="cover" />
  </S.Wrapper>
)

export default ImageBox

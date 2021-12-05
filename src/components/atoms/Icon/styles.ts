import styled, { css } from 'styled-components'

import { IconProps } from '.'

export const Icon = styled.i<IconProps>`
  ${({ size }) => css`
    display: inline-block;
    height: ${size}px;
    width: ${size}px;
  `}
`

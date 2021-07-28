import styled, { css } from 'styled-components'
import { FullSectionProps } from '.'

export const Wrapper = styled.section<FullSectionProps>`
  ${({ theme, color }) => css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors[color!]};
  `}
`

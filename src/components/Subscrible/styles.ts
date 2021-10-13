import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    label {
      display: block;
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      margin-bottom: 1rem;
    }
    input,
    input:hover,
    input:active {
      width: 80%;
      margin-right: 1rem;
      border-radius: 0px;
      color: ${theme.colors.white};
      padding: ${theme.spacings.xxsmall};
      background: ${theme.colors.darkGray};
      border: 0.2rem solid ${theme.colors.white};
    }
    button {
      font-weight: ${theme.font.bold};
      padding: ${theme.spacings.xxsmall};
      background: ${theme.colors.darkGray};
      border: 0.2rem solid ${theme.colors.white};
      color: ${theme.colors.white};
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.darkGray};
        transition: all 0.5s ease-in-out;
      }
    }
    span {
      margin-top: 1rem;
      font-size: ${theme.font.sizes.xxsmall};
      background: none;
      transition: all 0.5s ease-in-out;
    }
  `}
`

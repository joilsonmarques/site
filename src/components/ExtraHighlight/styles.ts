import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: stretch;
    justify-content: center;
    background: ${theme.colors.red};
    color: white;
    margin: 0;
    min-height: 500px;
    padding: ${theme.spacings.large};
    padding-right: calc(${theme.grid.collumn} * 1);
    padding-left: calc(${theme.grid.collumn} * 2);

    > div {
      margin: 0 calc(${theme.grid.collumn} / 2);
    }
  `}
`

export const ImageBox = styled.div`
  display: block;
  min-height: 360px;
  min-width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 15rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    align-self: flex-end;
    flex-shrink: 0;
  }
`
export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 580px;
    position: relative;
    p {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.small};
    }
    span {
      display: block;
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.bold};
    }
    iframe {
      position: absolute;
      bottom: 0;
    }
  `}
`

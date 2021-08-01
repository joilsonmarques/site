import styled, { css } from 'styled-components'
import * as EpisodeCardStyles from 'components/EpisodeCard/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    background: ${theme.colors.purple};
    ${media.greaterThan('medium')`
      flex-direction: row;
      padding: 20rem calc(${theme.grid.collumn}*2);
    `}

    /* tablet vertical */
    ${media.between('medium', '900px')`
      align-items: flex-start;
      justify-content: space-between;
      padding: 5rem 10rem;
    `}
    /* tablet horizontal */
    ${media.between('901px', 'large')`
      align-items: flex-start;
      justify-content: space-between;
      padding: 5rem 6rem;
    `}


    ${EpisodeCardStyles.Wrapper} {
      width: 15rem;
      height: 15rem;
      margin: 2rem auto;
      ${media.greaterThan('medium')`
        width: 28rem;
        height: 28rem;
        margin: 0 auto;
      `}
      ${media.between('medium', '900px')`
        margin: 20rem 0 0;
      `}
      ${media.between('901px', 'large')`
        margin: 20rem 0;
      `}
    }
  `}
`

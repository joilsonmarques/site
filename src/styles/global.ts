import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v15-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
    url('/fonts/poppins-v15-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v15-latin-700.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: ${theme.font.sizes.base};
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    ::-webkit-input-placeholder {
      color: ${theme.colors.white};
      opacity: 0.5;
    }

    :-moz-placeholder {
      /* Firefox 18- */
      color: ${theme.colors.white};
      opacity: 0.5;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: ${theme.colors.white};
      opacity: 0.5;
    }

    :-ms-input-placeholder {
      /* IE 10+ */
      color: ${theme.colors.white};
      opacity: 0.5;
    }

    ::-ms-input-placeholder {
      /* Edge */
      color: ${theme.colors.white};
    }

    :placeholder-shown {
      /* Standard one last! */
      color: ${theme.colors.white};
    }
  `}

`

export default GlobalStyles

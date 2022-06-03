import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.6rem;
    color: #616161;
  }

  h1 {
    font-size: 6.4rem;
  }

  ul {
    list-style: none;
  }

  li, p {
    font-size: 2.4rem;
  }
`;

export default GlobalStyle;

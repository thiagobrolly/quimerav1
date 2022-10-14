import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './defaultTheme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box
  }

  html {
    // a cada 1rem será considerado 10px
    font-size: 62.5%; // 62.5 * 16 / 100 = 10px
  }

  /* @media (max-width: 768px) {
    html {
      font-size: 54.7%; // 54.7 * 16 / 10 = 87,5 --> 87,5 * 16 / 100 = 14px
      // todas as medidas relativas a 16px passam a ter 14px
    }
  }
  @media (max-width: 480px) {
    html {
      font-size: 47.5%;
    }
  } */

  body,
  input,
  textarea,
  select,
  button {
    font-family: ${defaultTheme.font.family.primary};
    font-weight: 400;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (max-width: 768px) {
    body,
    input,
    textarea,
    select,
    button {
      font-size: 1.4rem;
    }
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px
  }

  ::-webkit-scrollbar-track-piece {
    background-color: ${defaultTheme.colors.gray_60};
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4e5872;
    border-radius: 2px;
  }
`;

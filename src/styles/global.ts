import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightText};
    font-family: "Open Sans", sans-serif;
    min-height: 100%;
    height: -webkit-fill-available;
  }
  html {
    min-height: 100%;
    height: -webkit-fill-available;
  }
`;
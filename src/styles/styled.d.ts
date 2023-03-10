import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      lightText: string;
      darkText: string;
      primaryText: string;
      secondaryText: string;
      cyan: string;
      salmon: string;
      pink: string;
      green: string;
      yellow: string;
      red: string;
    };
  }
}
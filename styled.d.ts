import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string;
      dark: string;
      white: string;
    };
    fonts: {
      size: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
      };
      weight: {
        regular: number;
        semiBold: number;
      };
      family: {
        primary: string;
      };
    };
    media: {
      custom: (width: number) => string;
      phone: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    zIndexes: {
      level0: string;
      level1: string;
      level2: string;
      level3: string;
      level4: string;
      level5: string;
      level6: string;
      level7: string;
      level8: string;
      level9: string;
    };
  }
}

import { Interpolation, createGlobalStyle } from 'styled-components';

export type Styles = Interpolation<React.CSSProperties>;

export const darkTheme = {
  responsiveBreakpoints: {
    mobileBreakpoint: 845,
    tabletBreakpoint: 1150,
  },
  colors: {
    accentEmphasis: '#6F792F',
    accent: '#C1D72F',
    accent700: '#B0C42B',
    primaryEmphasis: '#939581',
    primary: '#393A32',
    secondary: '#FFFFFF',
    secondaryEmphasis: '#F1F1F1',
    warningEmphasis: '#5A2C34',
    warning: '#CF6679',
  },
};

export const lightTheme = {
  responsiveBreakpoints: {
    mobileBreakpoint: 845,
    tabletBreakpoint: 1150,
  },
  //   primary400: "#D8F0FA",
  //   primary500: "#FBF4E2",
  //   accentBtn500: "#E7E7EB",
  colors: {
    accentEmphasis: '#E4EEA4',
    accent: '#C1D72F',
    accent700: '#B0C42B',
    primaryEmphasis: '#939581',
    primary: '#393A32',
    secondary: '#FFFFFF',
    secondaryEmphasis: '#F1F1F1',
    warningEmphasis: '#EFD6DB',
    warning: '#CF6679',
  },

  //   accent600: "#70738C",
  //   accent700: "#6E707A",
  //   accent800: "#61636D",
  //   contrast500: "#EB6E4B",
  //   contrast900: "#642A19",
};

export const GlobalStyles = createGlobalStyle`

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    ReseCSS
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text500};

  }
 
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .no-scroll{
    overflow-y: hidden;
  }

  *:focus {
    outline: none;
  }

 *, *::before, *::after {
  box-sizing: border-box;
  }

`;

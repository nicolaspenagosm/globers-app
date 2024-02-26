import { Interpolation, createGlobalStyle } from 'styled-components';

export type Styles = Interpolation<React.CSSProperties>;

export const darkTheme = {
  responsiveBreakpoints: {
    mobile: 845,
    tablet: 1150,
  },
  colors: {
    accentEmphasis: '#96A72A',
    accent400: '#D7E57A',
    accent: '#C1D72F',
    accent700: '#B0C42B',
    accentSecondary: '#27559B',
    accentSecondary700: '#1B3A69',
    primaryEmphasis: '#939581',
    primary: '#21231F',
    primary400: '#5A5B50',
    secondary: '#869528',
    secondary600: '#EBEBEB',
    secondary700: '#F8F8F8',
    secondaryEmphasis: '#6F792F',
    warningEmphasis: '#5A2C34',
    warning: '#D06A7D',
    warning700: '#EC1818',
    text500: '#FFFFFF',
    text300: '#B4B4B4',
    bg: '#292A24',
    bgAlt: '#42423D',
    shadow: '#FFFFFF1A',
  },
};

export const lightTheme = {
  responsiveBreakpoints: {
    mobile: 845,
    tablet: 1150,
  },
  colors: {
    accentEmphasis: '#E0F939',
    accent400: '#D7E57A',
    accent: '#C1D72F',
    accent700: '#B0C42B',
    accent800: '#A0B228',
    accentSecondary: '#27559B',
    accentSecondary700: '#1B3A69',
    primaryEmphasis: '#939581',
    primary: '#393A32',
    primary400: '#5A5B50',
    secondary: '#FFFFFF',
    secondaryEmphasis: '#F1F1F1',
    secondary600: '#EBEBEB',
    secondary700: '#F8F8F8',
    warningEmphasis: '#EFD6DB',
    warning: '#D06A7D',
    warning700: '#EC1818',
    text500: '#393A32',
    text300: '#5C5C5C',
    bg: '#FFFFFF',
    bgAlt: '#F8F8F8',

    shadow: '#00000008',
  },
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

  html, body{
    height: 100%;
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

  #root{
    height: 100%;
  }

`;

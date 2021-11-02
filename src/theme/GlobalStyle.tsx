import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

import { fonts } from "./fonts";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${fonts}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    ${theme.colors.black}
  }

  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figcaption {
    max-width: 60ch;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  body {
    font-family: ${theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.8;
    min-width: 320px;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
  }
  
  h1,h1,h3,h4,h5,h6 {
    font-family: ${theme.fonts.heading};
  }

  h1 {
    font-size: ${theme.fontSizes[16]};
  }
  h2 {
    font-size: ${theme.fontSizes[14]};
  }
  h3 {
    font-size: ${theme.fontSizes[12]};
  }
  h4 { 
    font-size: ${theme.fontSizes[10]};
  }
  h5 {
    font-size: ${theme.fontSizes[8]};
  }
  h6 {
    font-size: ${theme.fontSizes[7]};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    /* COLORS */
    --color-white: #fff;
    --color-black: #000;
    --color-gray: #f9f9f9;
    --color-gray-2: #363636;
    --color-gray-3: #2c2c2c;
    --color-gray-4: #111;
    --color-blue: #0099ff;
    --color-red: #f45847;
    --color-yellow: #fbbb35;
    --color-green: #2acd7e;

    --font-weight: 400;
    --font-weight-2: 600;
    --font-weight-3: 900;

    --leading-body: 1.58;
    --leading-heading: 1.4;

    --radius-small: 0.8rem;
    --radius-large: 1.6rem;
    --radius-full: 100rem;

    --transition: 0.15s ease;
  }

  ::selection {
    background-color: var(--color-green);
    color: var(--color-black);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    background-color: var(--color-gray-4);
    scroll-behavior: smooth;
  }

  html,
  body {
    min-height: 100vh;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    line-height: var(--leading-body);
    text-rendering: optimizeLegibility;
    color: var(--color-white);
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 1;
  }

  button:disabled {
    cursor: normal;
  }

  .full-layout {
    width: 100% !important;
    max-width: 100% !important;
    grid-column: 1 / -1 !important;
    padding: 0 !important;
  }

  strong {
    font-weight: var(--font-weight-3);
  }

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(0.4rem);
    }

    100% {
      transform: translateY(0);
    }
  }

  /* * {
    outline: 0.1rem solid red;
  } */
`

export default globalStyles

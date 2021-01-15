import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    /* COLORS */
    --color-white: #fff;
    --color-black: #000;
    --color-gray: #f9f9f9;
    --color-gray-2: #363636;
    --color-gray-3: #161616;
    --color-blue: #0099ff;
    --color-red: #f45847;
    --color-yellow: #fbbb35;
    --color-green: #68c36c;
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
    background-color: var(--color-gray);
  }

  html,
  body {
    min-height: 100vh;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.58;
    text-rendering: optimizeLegibility;
    color: var(--color-gray-2);
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  .full-layout {
    width: 100% !important;
    max-width: 100% !important;
    grid-column: 1 / -1 !important;
  }
`

export default globalStyles

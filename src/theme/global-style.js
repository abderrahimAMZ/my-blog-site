import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
    colour: {
        black: '#000',
        white: '#fff',
        grey: {
            100: '#f7fafc',
            200: '#edf2f7',
            300: '#e2e8f0',
            400: '#cbd5e0',
            500: '#a0aec0',
            600: '#718096',
            700: '#4a5568',
            800: '#2d3748',
            900: '#1a202c',
        },
    },
    font: {
        sans: 'Cambay, san-serif',
        serif: 'Arvo, serif',
        monospace: '"Ubuntu Mono", monospace',
    },
    lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
    },
    spacing: {
        px: '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
    },
    letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
    },
    fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
    },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
  body {
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  }


  .my-footer {
      background: rebeccapurple;
  }

  :root {
      --clr-bg-dark: #1f2937; /* gray-800 */
      --clr-bg-light: #fafafa; /* zinc-50 */

      --clr-text-dark: #fff; /* gray-200 */
      --clr-text-light: #fafafa; /* zinc-50 */
  }

  .dark {
      background-color: var(--clr-bg-dark);
      color: var(--clr-text-dark);
  }


  .light {
      background-color: var(--clr-bg-light);
  }
  .dark {
      @apply bg-gray-800 text-zinc-50;
  }

  .dark {
      background-color: #282c34;
  }

  article {
      padding: 16px;
      margin-bottom: 16px;
  }
  .light article {
      background-color: #f0f0f0; /* Adjust this to the desired shade of grey */
      border-radius: 5%;
  }


  .dark article {
      background-color: #1f2937;
      border-radius: 5%;
  }


  .light h2 a{
      color: #000000;
  }
  .light h2 a:hover{
      color: rebeccapurple;
  }

  .dark h2 a:hover{
      color: #E30B5C;
  }
  .back-link {
      font-size: 1.2em;
      color: rebeccapurple/* Adjust this to the desired font size */
      /* Other styles... */
  }
  .table-of-content {
      padding: 16px;
      margin-bottom: 16px;
      border-radius: 5%;
  }

  .light.table-of-content {
      background-color: #f0f0f0;
  }

  .dark.table-of-content {
      background-color: #1f2937;
  }
  
  `
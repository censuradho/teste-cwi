import { createStitches } from '@stitches/react'

const { styled, globalCss: GlobalCss, getCssText, theme, css, keyframes, createTheme } = createStitches({
  theme: {
    colors: {
      background: '#191920',
      heading: '#000',
      textOnBackground: '#fff',
      foreground: '#fff',
      disabled: '#8C8C8F'
    },
    fonts: {
			text: 'Roboto, serif',
		},
    fontSizes: {
      lg: '1.5rem',
      md: '1rem',
      sm: '0.875rem',
      xs: '0.75rem'
    },
    space: {
      sm: '1rem',
      xs: '0.85rem',
    },
    sizes: {
      lg: '63.93rem',
      md: '51.65rem',
      sm: '45rem',
    },
    radii: {
      sm: '0.31rem',
      md: '1.25rem'
    }
  },
  media: {
    xm: '(min-width: 32.4rem)',
    sm: '(min-width: 40rem)',
    md: '(min-width: 70.625rem)',
    lg: '(min-width: 81rem)',
  },
})

const globalStyle =  GlobalCss({
  '*': {
		padding: '0',
		margin: '0',
		boxSizing: 'border-box',
		fontFamily: '$text',
		color: '$heading',
      /* width */
      '&::-webkit-scrollbar': {
        width: '10px',
      },
  
    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '100px'
  
    },
  
    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
    },
    /* Handle on hover */
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    }
	},
  button: {
		background: 'none',
		border: 'none',
		cursor: 'pointer'
	},
  body: {
		backgroundColor: '$background',
		width: '100%',
		height: '100%'
	},
	li: {
		listStyle: 'none'
	},
  a: {
    textDecoration: 'none',
    cursor: 'pointer'
  },
  strong: {
    fontWeight: 'bold'
  },
  span: {
    fontWeight: 'lighter'
  },
})

export {
  styled, 
  getCssText, 
  theme, 
  css, 
  keyframes, 
  createTheme,
  globalStyle
}
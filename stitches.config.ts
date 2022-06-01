import { createStitches } from '@stitches/react'

const { styled, globalCss: GlobalCss, getCssText, theme, css, keyframes, createTheme } = createStitches({
  theme: {
    colors: {
      background: '#191920',
      heading: '#000',
      textOnBackground: '#fff',
      disabled: '#191920'
    },
    fonts: {
			text: 'Roboto, serif',
		},
    fontSizes: {
      lg: '1.5rem',
      md: '1rem',
      sm: '0.875rem',
      xs: '0.75rem'
    }
  }
})

const globalStyle =  GlobalCss({
  '*': {
		padding: '0',
		margin: '0',
		boxSizing: 'border-box',
		fontFamily: '$text',
		color: '$heading'
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
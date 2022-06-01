import { styled } from "stitches.config";

export const Container = styled('section', {
  width: '100%',
  background: '$foreground',
  padding: '$sm',
  borderRadius: '$md',
  minWidth: '20.25rem',
  position: 'sticky',
  top: '0',

  '@sm': {
    maxWidth: '24.25rem',
    top: '$sm',
  },

  p: {
    fontWeight: 500,
    fontSize: '$md',
  },

})

export const ScrollView = styled('div', {
  maxHeight: '10rem',
  overflow: 'auto',
  margin: '1rem 0',
  maxWidth: 'initial',

  '@sm': {
    position: 'sticky',
    top: '$sm',
    maxHeight: '30rem',
  },
})

export const Title = styled('strong', {
  fontSize: '$lg',
})

export const Item = styled('li', {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',

})

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  margin: '0.375rem 0',
})


export const Total = styled('p', {
})

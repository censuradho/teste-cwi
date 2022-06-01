import { styled } from "stitches.config";

export const Main = styled('main', {


})

export const Item = styled('li', {
})


export const List = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '1.85rem',

  '@xm': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@md': {
    gridTemplateColumns: 'repeat(3, 1fr)',

  }
})

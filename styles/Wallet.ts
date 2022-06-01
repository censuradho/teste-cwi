import { styled } from "stitches.config";

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'flex-start',
  gap: '3.75rem',
  padding: '$sm 0',

  '@sm': {
    flexDirection: 'row'
  }
})

export const Item = styled('li', {
  width: '100%',


})

export const List = styled('ul', {
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.87rem',
  '@sm': {
    width: 'initial'
  }
})
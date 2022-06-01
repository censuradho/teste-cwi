import { styled } from "stitches.config";

export const Container = styled('div', {
  width: '100%',
  maxWidth: '$smContainer',
  height: '500px',
  background: 'tomato',
  margin: '0 auto',
  padding: '$sm',

  '@md': {
    maxWidth: '$md',
    background: 'yellow'
  },

  '@lg': {
    maxWidth: '$lg',
  }
})
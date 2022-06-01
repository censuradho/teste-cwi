import { styled } from "stitches.config";

export const Container = styled('div', {
  width: '100%',
  maxWidth: '$smContainer',
  height: '500px',
  margin: '0 auto',
  padding: '$sm',

  '@md': {
    maxWidth: '$md',
  },

  '@lg': {
    maxWidth: '$lg',
  }
})
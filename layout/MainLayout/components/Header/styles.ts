import { styled } from 'stitches.config'
export const Container = styled('header', {
  width: '100%',
  height: '6.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const Link = styled('a', {
  color: '$textOnBackground',

  span: {
    fontSize: '$sm',
    fontWeight: '500 !important',
    color: '$textOnBackground',
    textAlign: 'right'
  },
  strong: {
    fontSize: '$md',
    color: '$textOnBackground',
  }
})
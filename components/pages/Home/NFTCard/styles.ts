import { styled } from "stitches.config";

export const Container = styled('div', {
  width: '100%',
  background: '$foreground',
  borderRadius: '$md',
  paddingBottom: '$sm'
})

export const Thumb = styled('div', {
  width: '100%',
  height: '20rem',
})

export const ThumbImg = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '$md',
})

export const Body = styled('div', {
  padding: '$sm',
  display: 'flex',
  flexDirection: 'column',
  gap: '$sm'
})

export const Name = styled('strong', {
  fontSize: '$md',
  color: '$heading'
})

export const Amount = styled('span', {
  color: '$heading',
  fontSize: '$md',
})

export const Id = styled(Amount, {
  fontSize: '$sm',
})
import { ButtonHTMLAttributes, forwardRef, memo } from 'react'
import type { VariantProps } from '@stitches/react'

import * as Styles from './styles'

type RootButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
  | 'disabled'
>

type StylesVariants = VariantProps<typeof Styles.Button>

interface ButtonProps extends RootButtonAttributes, StylesVariants {
  children: string
}


export const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children,
  ...props
}, ref) => {
  return (
    <Styles.Button {...props} ref={ref}>{children}</Styles.Button>
  )
})

export const Button = memo(BaseButton)
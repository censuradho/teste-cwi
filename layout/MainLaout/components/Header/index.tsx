import { useWallet } from 'context'
import { memo } from 'react'

import * as Styles from './styles'

interface HeaderProps {}

function BaseHeader (props: HeaderProps) {
  const wallet = useWallet()

  console.log(wallet)
  return (
    <Styles.Container></Styles.Container>
  )
}

export const Header = memo(BaseHeader)
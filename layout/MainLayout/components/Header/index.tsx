import { useWallet } from 'context'
import { memo } from 'react'
import LinkNext from 'next/link'

import * as Styles from './styles'

import Logo from 'assets/Logo.svg'
import WalletSvg from 'assets/wallet.svg'

import { Flex } from 'components/base'

interface HeaderProps {}

function BaseHeader (props: HeaderProps) {
  const { nfts } = useWallet()

  return (
    <Styles.Container>
      <Logo />

        <Styles.Link>
            <Flex gap={0.5}>
              <Flex flexDirection="column">
                <strong>Minha carteira</strong>
                <span>{`${nfts.length} itens`}</span>
              </Flex>
              <WalletSvg />
            </Flex>
        </Styles.Link>
    </Styles.Container>
  )
}

export const Header = memo(BaseHeader)
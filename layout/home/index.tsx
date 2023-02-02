import type { NextPageWithLayout } from 'next'
import { ReactElement, useMemo } from 'react'

import { useNFT } from 'hooks/services/useNFT'

import { NFTCard } from 'components/pages'
import { useWallet } from 'context'

import * as Styles from './styles'

import { MainLayout } from 'layout/MainLayout'
import { HomeProps } from './types'

export function HomeLayout (props: HomeProps) {
  const { addNft, nfts: walletNfts } = useWallet()

  const renderNFTCards =  props.data.map(value => {
    const disabled = walletNfts.map(value => value.id).includes(value.id)

    return (
      <Styles.Item
        key={value.id}
      >
      <NFTCard
        onPurchase={() => addNft(value)}
        disabled={disabled}
        {...value}
      />
      </Styles.Item>
    )
  })

  return (
  <MainLayout>
    <main>
      <Styles.List>
        {renderNFTCards}
      </Styles.List>
    </main>
    </MainLayout>
  )
}
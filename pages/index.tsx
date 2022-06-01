import { ReactElement, useCallback, useMemo } from 'react'
import type { NextPageWithLayout } from 'next'

import { useNFT } from 'hooks/services/useNFT'

import { NFTCard } from 'components/pages'
import { useWallet } from 'context'

import * as Styles from 'styles/Home'
import { NFT } from 'types/nft'
import { MainLayout } from 'layout/MainLayout'

const Home: NextPageWithLayout = () => {
  const { addNft, nfts: walletNfts } = useWallet()

  const [nfts] = useNFT()


  const renderNFTCards = useMemo(() => nfts.map(value => {
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
  , [nfts, addNft, walletNfts])

  return (
    <main>
      <Styles.List>
        {renderNFTCards}
      </Styles.List>
    </main>
  )
}

Home.getLayout = (page: ReactElement) => (
  <MainLayout>
      {page}
  </MainLayout>
)

export default Home

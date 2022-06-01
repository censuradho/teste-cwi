import { useCallback, useMemo } from 'react'
import type { NextPage } from 'next'

import { useNFT } from 'hooks/services/useNFT'

import { Container } from 'styles/Global'

import { NFTCard } from 'components/pages'
import { useWallet } from 'context'

import * as Styles from 'styles/Home'
import { NFT } from 'types/nft'

const Home: NextPage = () => {
  const { setNfts, nfts: walletNfts } = useWallet()

  const [nfts] = useNFT()

  const handleAddNftToWallet = useCallback((value: NFT) => {
    setNfts(prevState => ([
      ...prevState.filter(nft => nft.id !== value.id),
      value
    ]))
  }, [setNfts])

  const renderNFTCards = useMemo(() => nfts.map(value => {
    const disabled = walletNfts.map(value => value.id).includes(value.id)

    console.log(disabled)
    return (
      <Styles.Item
        key={value.id}
      >
      <NFTCard
        onPurchase={() => handleAddNftToWallet(value)}
        disabled={disabled}
        {...value}
      />
      </Styles.Item>
    )
  })
  , [nfts, handleAddNftToWallet, walletNfts])

  return (
    <Container>
      <main>
        <Styles.List>
          {renderNFTCards}
        </Styles.List>
      </main>
    </Container>
  )
}

export default Home

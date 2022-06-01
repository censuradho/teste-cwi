import { useNFT } from 'hooks/services/useNFT'
import type { NextPage } from 'next'

import { Container } from 'styles/Global'

import { NFTCard } from 'components/pages'
import { useMemo } from 'react'

import * as Styles from 'styles/Home'

const Home: NextPage = () => {
  const [nfts] = useNFT()

  const renderNFTCards = useMemo(() => nfts.map(value => (
    <Styles.Item
      key={value.id}
    >
    <NFTCard 
      {...value}
    />
    </Styles.Item>
  ))
  , [nfts])

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

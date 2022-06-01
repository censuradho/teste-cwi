import { useNFT } from 'hooks/services/useNFT'
import type { NextPage } from 'next'

import { Container } from 'styles/Global'

import { NFTCard } from 'components/pages'
import { useMemo } from 'react'

const Home: NextPage = () => {
  const [nfts] = useNFT()

  const renderNFTCards = useMemo(() => nfts.map(value => (
    <NFTCard 
      key={value.id}
      {...value}
    />
  ))
  , [nfts])

  return (
    <Container>
      {renderNFTCards}
    </Container>
  )
}

export default Home

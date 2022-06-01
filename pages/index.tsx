import { useNFT } from 'hooks/services/useNFT'
import type { NextPage } from 'next'

import { Container } from 'styles/Global'

const Home: NextPage = () => {
  const [nfts] = useNFT()

  console.log(nfts)
  return (
    <Container>
      <h1>hello world</h1>
    </Container>
  )
}

export default Home

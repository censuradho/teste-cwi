import { memo, useCallback, useMemo } from 'react'

import { Flex, Grid, Icon } from 'components/base'

import { useWallet } from 'context'

import * as Styles from './styles'
import { toCurrency } from 'lib/helpers'
import { ETHER_VALUE_BRL } from 'constants/nft'
import { NFT } from 'types/nft'

interface ResumeProps {}

function BaseResume (props: ResumeProps) {
  const { 
    total,
    nfts,
    totalBrl,
  } = useWallet()


  const renderInfos = useMemo(() => nfts.map(value => {
    const total = toCurrency(value.price * ETHER_VALUE_BRL)

    return (
      <Styles.Item key={value?.id}>
        <span>{`${value?.id}`}</span>
        <Flex 
          gap={0.5} 
          alignItems="center"
        >
          <Icon name="ether" />
          <p>{value.price}</p>
        </Flex>
        <span>{total}</span>
      </Styles.Item>
    )
  }), [nfts])

  return (
    <Styles.Container>
      <Styles.Title>Resumo</Styles.Title>
      <Styles.ScrollView>
        <Styles.List>{renderInfos}</Styles.List>
      </Styles.ScrollView>
      <Grid gridTemplateColumns="repeat(3, 1fr)">
        <p>Total</p>
        <Flex gap={0.5} alignItems="center">
          <Icon name="ether" />
          <p>{total.toFixed(2)}</p>
        </Flex>
        <span>{totalBrl}</span>
      </Grid>
    </Styles.Container>
  )
}

export const Resume = memo(BaseResume)
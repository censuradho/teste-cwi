import { memo } from 'react'

import * as Styles from './styles'

import type { NFT } from 'types/nft'

import { Flex } from 'components/base'

import EtherSvg from 'assets/ether.svg'

interface NFTCardProps extends NFT {}

function BaseNFTCard ({
  image,
  collection,
  id,
  price
,}: NFTCardProps) {
  return (
    <Styles.Container>
      <Styles.Thumb>
        <Styles.ThumbImg 
          src={image?.previewUrl} 
          alt={`NFT image collection ${collection?.name}`} 
        />
      </Styles.Thumb>
      <Styles.Body>
        <Flex 
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Styles.Name>{collection?.name}</Styles.Name>
          <Flex 
            gap={1} 
            alignItems="center"
          >
            <EtherSvg />
            <Styles.Amount>{price}</Styles.Amount>
          </Flex>
        </Flex>
        <Styles.Id>{`#${id}`}</Styles.Id>
      </Styles.Body>
    </Styles.Container>
  )
}

export const NFTCard = memo(BaseNFTCard)
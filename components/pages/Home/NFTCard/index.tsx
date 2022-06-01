import { memo } from 'react'

import * as Styles from './styles'

import type { NFT } from 'types/nft'

import { Button, Flex, Icon } from 'components/base'

interface NFTCardProps extends NFT {
  onPurchase?: () => void;
  disabled?: boolean;
}

function BaseNFTCard ({
  image,
  collection,
  id,
  price,
  onPurchase,
  disabled
}: NFTCardProps) {
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
            <Icon name="ether" />
            <Styles.Amount>{price}</Styles.Amount>
          </Flex>
        </Flex>
        <Styles.Id>{`#${id}`}</Styles.Id>
        <Button 
          disabled={disabled} 
          onClick={onPurchase} 
          fullWidth>Comprar</Button>
      </Styles.Body>
    </Styles.Container>
  )
}

export const NFTCard = memo(BaseNFTCard)
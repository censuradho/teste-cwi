import Image from 'next/image'
import { memo } from 'react'

import type { NFT } from 'types/nft'

import { Flex, Icon } from 'components/base'

import * as Styles from './styles'

interface CardProps extends NFT {
  onRemove?: () => void
}

function BaseCard ({
  collection,
  id,
  image,
  price,
  onRemove
}: CardProps) {

  return (
    <Styles.Container>
      <Styles.Thumb>
        <Image 
          layout="fill"
          src={image.previewUrl}
          alt={`NFT image collection ${collection?.name}`} 
        />
      </Styles.Thumb>
      <Flex flexDirection="column" flex={1}>
        <Flex flex={1} justifyContent="space-between" alignItems="flex-start">
          <Flex flexDirection="column" >
            <Styles.Name>{collection?.name}</Styles.Name>
            <Styles.Id>{`#${id}`}</Styles.Id>
          </Flex>
          <button onClick={onRemove}>
            <Icon name="trash" />
          </button>
        </Flex>
        <Flex gap={0.5}>
          <Icon name="ether" />
          <Styles.Id>{price}</Styles.Id>
        </Flex>
      </Flex>
    </Styles.Container>
  )
}

export const Card = memo(BaseCard)
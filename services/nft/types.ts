interface Image {
  url: string;
  previewUrl: string;
  thumbnailUrl: string;
}

interface Collection {
  name: string
}

export interface NFT {
  id: number;
  price: number;
  image: Image;
  collection: Collection
}

export type GetResponseNFT = NFT[]
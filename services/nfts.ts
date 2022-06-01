import { GetResponseNFT } from 'types/nft'
import { api } from './api'


export function getNfts () {
  return api.get<GetResponseNFT>('/nfts')
}

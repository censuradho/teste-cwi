import { 
  createContext, 
  Dispatch, 
  ReactNode, 
  SetStateAction, 
  useCallback, 
  useContext, 
  useEffect, 
  useMemo, 
  useState 
} from 'react'

import { NFT } from 'types/nft'

import { ETHER_VALUE_BRL } from 'constants/nft'
import { toCurrency } from 'lib/helpers';
import { useLocalStorage } from 'hooks/services/useLocalStorage';

interface Wallet {
  nfts: NFT[];
  total: number;
  totalBrl: string;
  addNft: (nft: NFT) => void;
  removeNft: (id: number) => void;
}

export const WalletContext = createContext<Wallet>({} as Wallet)

interface WalletProviderProps {
  children: ReactNode
}

export function WalletProvider ({ children }: WalletProviderProps) {
  const [storageNft, setStorageNft] = useLocalStorage<NFT[]>('@NFT:nft', [])
  
  const total = useMemo(() => storageNft
  .map(value => value.price)
  .reduce((prev, cur) => prev + cur, 0)
  , [storageNft])

  const totalBrl = useMemo(() => toCurrency(total * ETHER_VALUE_BRL), [total])

  const handleAddNFT = useCallback((value: NFT) => {
    setStorageNft(prevState => ([
      ...prevState.filter(nft => nft.id !== value.id),
        value
    ]))
  }, [setStorageNft])

  const handleRemoveNFTFromWallet = useCallback((id: number) => {
    setStorageNft(prevState => prevState.filter(nft => nft.id !== id))
  }, [setStorageNft])
    
  
  return (
    <WalletContext.Provider value={{
      nfts: storageNft, 
      total,
      totalBrl,
      removeNft: handleRemoveNFTFromWallet,
      addNft: handleAddNFT,
    }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext)
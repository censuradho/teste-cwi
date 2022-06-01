import { 
  createContext, 
  Dispatch, 
  ReactNode, 
  SetStateAction, 
  useContext, 
  useState 
} from 'react'

import { NFT } from 'types/nft'

interface Wallet {
  nfts: NFT[];
  setNfts: Dispatch<SetStateAction<NFT[]>>
}

export const WalletContext = createContext<Wallet>({} as Wallet)

interface WalletProviderProps {
  children: ReactNode
}

export function WalletProvider ({ children }: WalletProviderProps) {
  const [nfts, setNfts] = useState<NFT[]>([])

  console.log(nfts)
  return (
    <WalletContext.Provider value={{
      nfts, 
      setNfts
    }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext)
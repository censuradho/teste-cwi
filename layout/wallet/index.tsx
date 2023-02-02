
import { useWallet } from "context";

import * as Styles from './styles';

import { Card, Resume } from "components/pages/Wallet";
import { MainLayout } from "layout/MainLayout";

export function WalletLayout (){
  const { nfts, removeNft } = useWallet()

  const renderCards = nfts.map(value => (
    <Styles.Item
      key={value.id}
    >
      <Card
        onRemove={() => removeNft(value.id)}
        {...value}
      />
    </Styles.Item>
  ))

  return (
    <MainLayout>
    <Styles.Main>
      <Styles.List>
        {renderCards}
      </Styles.List>
      <Resume />
    </Styles.Main>
    </MainLayout>
  )
}

import { NextPageWithLayout } from "next";
import { ReactElement, useCallback } from "react";

import { useWallet } from "context";

import * as Styles from 'styles/Wallet'

import { MainLayout } from "layout/MainLayout";
import { Card, Resume } from "components/pages/Wallet";

const Wallet: NextPageWithLayout = () => {
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
    <Styles.Main>
      <Styles.List>
        {renderCards}
      </Styles.List>
      <Resume />
    </Styles.Main>
  )
}

Wallet.getLayout = (page: ReactElement) => (
  <MainLayout>
      {page}
  </MainLayout>
)

export default Wallet
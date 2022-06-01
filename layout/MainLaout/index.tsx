import { memo, ReactNode } from 'react'

import { Container } from 'styles/Global'

import { Header } from './components'

import * as Styles from './styles'

interface MainLayoutProps {
  children: ReactNode
}

function BaseMainLayout ({ children }: MainLayoutProps) {
  return (
    <Styles.Container>
      <Container>
        <Header />
        {/* <h1>asdasdas</h1> */}
        {children}
      </Container>
    </Styles.Container>
  )
}

export const MainLayout = memo(BaseMainLayout)
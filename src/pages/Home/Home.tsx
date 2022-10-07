import { FC, memo } from "react";
import { styled } from 'ui/styles'

import { Page } from "ui/components";
import { Navbar } from 'ui/components/Navbar'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const _Home: FC = () => {
  return (
    <Page>
      
    </Page>
  )
}

export const Home = memo(_Home);
import { FC, memo } from "react";
import { styled } from 'ui/styles'

import { Page } from "ui/components";
import { Navbar } from 'ui/components/Navbar'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const _Store: FC = () => {
  return (
    <Page>
      <Wrapper>
        
      </Wrapper>
    </Page>
  )
}

export const Store = memo(_Store);
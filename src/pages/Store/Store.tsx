import { FC, memo } from 'react'
import { styled } from 'ui/styles'

import { Page } from 'ui/components'

const Wrapper = styled.div`
  width: 100%;
`


const _Store: FC = () => {
  return (
    <Page>
      <Wrapper></Wrapper>
    </Page>
  )
}

export const Store = memo(_Store)

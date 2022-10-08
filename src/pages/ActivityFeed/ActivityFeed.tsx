import { FC } from 'react'

import { Page } from 'ui/components'
import { Text } from 'ui/components/Text'
import { styled, theme } from 'ui/styles'

import { ReactComponent as Sprite } from 'ui/icons/underline_sprite1.svg'
import banner from 'ui/images/banner1.png'

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  margin-top: 24px;
  margin-bottom: 20px;
`

const StyledHeader = styled(Text)`
  height: 100%;
`

const StyledSprite = styled(Sprite)`
  position: absolute;
  bottom: -12px;
  width: 400px;
`

const Banner = styled.img`
  width: 100%;
  pointer-events: none;
  user-select: none;
`

export const ActivityFeed: FC = () => {
  return (
    <Page>
      <Header>
        <StyledHeader variant="h3" color={theme.palette.blue}>
          Лента активности
        </StyledHeader>
        <StyledSprite />
      </Header>
      <Banner src={banner} />
    </Page>
  )
}
